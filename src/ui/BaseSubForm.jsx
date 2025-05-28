import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

function BaseSubForm({
  title,
  onClose,
  mutationFn,
  formFields,
  defaultValues = {},
  successRedirect ,
}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const { mutate, isLoading } = useMutation({
    mutationFn,
    onSuccess: () => {
      navigate(successRedirect); 
      reset();
      onClose?.();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/dashboard");
    }
  };

  function renderField(field) {
    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <div key={field.name} className="mb-4">
            <label className="block mb-2">{field.label}</label>
            <input
              type={field.type}
              {...register(field.name, field.validation)}
              className={`w-full p-2 rounded border ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name].message}
              </p>
            )}
          </div>
        );
      case 'select':
        return (
          <div key={field.name} className="mb-4">
            <label className="block mb-2">{field.label}</label>
            <select
              {...register(field.name, field.validation)}
              className={`w-full p-2 rounded border ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">انتخاب کنید</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name].message}
              </p>
            )}
          </div>
        );
      case 'textarea':
        return (
          <div key={field.name} className="mb-4">
            <label className="block mb-2">{field.label}</label>
            <textarea
              {...register(field.name, field.validation)}
              className="w-full p-2 rounded border border-gray-300 min-h-[100px]"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-8 p-8 shadow-md rounded-lg">
      <h1 className="text-center mb-6 text-2xl font-bold">{title}</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        {formFields.map((field) => renderField(field))}
        
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer"
          >
            انصراف
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 text-white rounded cursor-pointer ${
              isLoading ? 'bg-gray-400' : 'bg-blue-600'
            }`}
          >
            {isLoading ? 'در حال ثبت...' : 'ثبت و ادامه'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BaseSubForm;