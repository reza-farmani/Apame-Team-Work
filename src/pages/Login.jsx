import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../server/services/userService";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion'

function Login({ onClose }) {
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
    navigate("/signup"); 
  }

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <section className='flex justify-center items-center min-h-screen bg-sky-100'>
      <div className='relative bg-white w-[580px] h-96 box-shadow rounded-3xl overflow-hidden' id='login'>
        <AnimatePresence>
          <motion.div 
            initial={{opacity: 0, width: '0%'}} 
            animate={{ opacity: 1, width: '100%' }} 
            transition={{ duration: 0.8}} 
            className="absolute w-full h-full before:content-[''] before:absolute before:right-[-250%] before:w-[300%] before:h-full before:bg-[#a2c2dd] before:rounded-[150px] before:z-[1]"
          >
            <motion.div 
              initial={{opacity: 0, width: '0%'}} 
              animate={{ opacity: 1, width: '50%'}} 
              transition={{ duration: 0.8}} 
              className='w-1/2 h-full absolute bg-[#a2c2dd] flex justify-center space-y-4 flex-col items-center text-center rounded-[150px] z-[1] left-0'
            >
              <motion.h1 
                initial={{opacity: 0, x: -100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1 }} 
                className="text-2xl font-bold text-[#ffffff] text-shadow"
              >
                بازم برگشتی ؟
              </motion.h1>
              <motion.p 
                initial={{opacity: 0, x: -100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.2 }}  
                className="mb-[20px] text-[#44505a] text-sm"
              >
                حساب کاربری ندارید؟
              </motion.p>
              <motion.button 
                initial={{opacity: 0, x: -100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.4}} 
                className='cursor-pointer text-[#eaebf4] py-1 px-[40px] rounded-lg bg-[#1b4fbfcb] hover:bg-green-500 duration-300' 
                onClick={toSignup}
              >
                ثبت نام
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className='absolute w-1/2 p-[14px] h-full right-0 flex items-center text-stone-950 text-center z-[10] bg-white'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <motion.h1 
              initial={{opacity: 0, x: 50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.6}} 
              className='text-2xl font-bold mb-[-10] mt-[-10] mx-0 text-[#364a68]'
            >
              ورود
            </motion.h1>

            {isError && (
              <motion.div 
                initial={{opacity: 0, x: 50}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.7}}
                className="text-red-500 text-sm mb-2"
              >
                {error.message || "خطایی در ورود رخ داده است"}
              </motion.div>
            )}

            <motion.div 
              initial={{opacity: 0, x: 50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.8}} 
              className='mt-[30px] relative'
            >
              <input 
                type="text" 
                className='w-full p-[13px] bg-stone-100 rounded-xl border-0 text-sm font-bold'  
                placeholder='ایمیل یا شماره تلفن'
                {...register("emailOrPhone", {
                  required: "وارد کردن ایمیل یا شماره تلفن الزامی است",
                  validate: (value) => {
                    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
                    const isPhone = /^[\d]{10,15}$/.test(value);
                    return isEmail || isPhone || "لطفاً ایمیل یا شماره تلفن معتبر وارد کنید";
                  }
                })}
              />
              <i className='fa-solid fa-user absolute right-[20px] bg-stone-100 top-1/3 text-zinc-400 text-sm'></i>
              {errors.emailOrPhone && (
                <p className="text-red-500 text-xs mt-1">{errors.emailOrPhone.message}</p>
              )}
            </motion.div>

            <motion.div 
              initial={{opacity: 0, x: 50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.8}} 
              className='mb-[30px] mt-[10px] relative'
            >
              <input 
                type="password" 
                className='w-full p-[13px] bg-stone-100 rounded-xl text-sm font-bold' 
                placeholder='رمز ورود'
                {...register("password", {
                  required: "رمز عبور الزامی است",
                  minLength: {
                    value: 6,
                    message: "رمز عبور باید حداقل ۶ کاراکتر باشد"
                  }
                })}
              />
              <i className='fa-solid fa-lock absolute bg-stone-100 right-[20px] top-1/3 text-zinc-400 text-sm'></i>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </motion.div>

            <motion.div 
              initial={{opacity: 0, x: 50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 2}} 
              className='mt-[-25px] mb-[15px]'
            >
              <Link to="/forgot-password" className='decoration-0 text-[#104f6f] hover:text-[#89a4ad] duration-300 text-sm'>
                فراموشی رمز عبور
              </Link>
            </motion.div>

            <motion.button 
              initial={{opacity: 0, x: 50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 2.2}} 
              className='w-full bg-[#1b4fbfcb] h-10 font-bold rounded-xl text-[#fcfeff] cursor-pointer hover:opacity-70 hover:scale-105 duration-300 btn-shadow'
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
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
                "ورود به حساب"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;