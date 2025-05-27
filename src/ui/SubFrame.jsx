import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { subFrameOrder } from '../server/services/order';

function SubFrame({ onClose }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const frameTypes = [
    'گرد',
    'مستطیل',
    'قلبی',
    'مربع',
  ];

  const materials = [
    'پلاستیکی',
    'چوبی',
  ];

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: subFrameOrder,
    onSuccess: () => {
      navigate("/"); 
      reset();
      onClose();
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

  return (
    <div className="max-w-[600px] mx-auto my-8 p-8 shadow-md rounded-lg">
      <h1 className="text-center mb-6 text-2xl font-bold">
        ثبت سفارش چاپ سابلیمیشن
      </h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="mb-4">
          <label className="block mb-2">
            ابعاد قاب (مثلاً 20x30 سانتی‌متر)
          </label>
          <input
            type="text"
            {...register("dimensions", { required: "این فیلد الزامی است" })}
            className={`w-full p-2 rounded border ${
              errors.dimensions ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dimensions && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dimensions.message}
            </p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">نوع قاب</label>
          <select
            {...register("frameType", { required: "این فیلد الزامی است" })}
            className={`w-full p-2 rounded border ${
              errors.frameType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">انتخاب کنید</option>
            {frameTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.frameType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.frameType.message}
            </p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">جنس قاب</label>
          <select
            {...register("material", { required: "این فیلد الزامی است" })}
            className={`w-full p-2 rounded border ${
              errors.material ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">انتخاب کنید</option>
            {materials.map((material) => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
          {errors.material && (
            <p className="text-red-500 text-sm mt-1">
              {errors.material.message}
            </p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">
            توضیحات اضافی (اختیاری)
          </label>
          <textarea
            {...register("notes")}
            className="w-full p-2 rounded border border-gray-300 min-h-[100px]"
          />
        </div>
        
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

export default SubFrame;