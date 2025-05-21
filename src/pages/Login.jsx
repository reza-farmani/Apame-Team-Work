import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../server/services/userService";
import { Link, useNavigate } from "react-router-dom";

function Login({ onSwitchToSignup, onClose }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const { mutate, isPending, isError, error } = useMutation({
  mutationFn: loginUser,
  onSuccess: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    navigate("/"); 
    onClose();
  },
 });

   function toSignup() {
    onSwitchToSignup();
  }

  function onSubmit(data) {
    mutate(data);
  }

  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        ورود به حساب کاربری
      </h2>

      {isError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error.message || "خطایی در ورود رخ داده است"}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
            ایمیل یا شماره تلفن
          </label>
          <input
            id="emailOrPhone"
            {...register("emailOrPhone", {
              required: "وارد کردن ایمیل یا شماره تلفن الزامی است",
              validate: (value) => {
                const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
                const isPhone = /^[\d]{10,15}$/.test(value);
                return isEmail || isPhone || "لطفاً ایمیل یا شماره تلفن معتبر وارد کنید";
              }
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.emailOrPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.emailOrPhone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            رمز عبور
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "رمز عبور الزامی است",
              minLength: {
                value: 6,
                message: "رمز عبور باید حداقل ۶ کاراکتر باشد"
              }
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isPending ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                در حال ورود...
              </>
            ) : (
              "ورود"
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center flex items-center justify-center">
        <p className="text-sm text-gray-600">
          حساب کاربری ندارید؟{" "}
              </p>
          <div className=" flex items-center justify-center gap-4">
          <Link
            onClick={toSignup}
            className="font-medium text-indigo-600 hover:text-indigo-500 mr-1"
            >
            ثبت نام
          </Link>
            <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            >
            فراموشی رمز عبور
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Login;