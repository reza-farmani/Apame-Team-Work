import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../server/services/userService";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiUnread, CiRead } from "react-icons/ci";
import { GiExitDoor } from "react-icons/gi";
import { useState } from "react";




function SignUp({ onClose }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      navigate("/"); 
      reset();
      onClose();
    },
  });

  const handelShow = () => {
    setShowPassword(!showPassword);
  }

  function toLogin() {
    navigate("/login");  
  }
  function onSubmit(data) {
    mutate(data);
  }


  function handelClose() {
    window.location.href = "/dashboard";
  }

  return (
    <section className='flex justify-center items-center min-h-screen bg-sky-100 w-full h-[100vh] absolute top-0'>
      <div className='relative bg-white w-[700px] h-[500px] box-shadow rounded-3xl overflow-hidden' id='signup'>
        <AnimatePresence>
          <motion.div 
            initial={{opacity: 0, width: '0%'}} 
            animate={{ opacity: 1, width: '100%' }} 
            transition={{ duration: 0.8}} 
            className="absolute w-full h-full before:content-[''] before:absolute before:right-[-250%] before:w-[300%] before:h-full before:bg-[#a2c2dd] before:rounded-[150px] "
          >
            <motion.div 
              initial={{opacity: 0, width: '0%'}} 
              animate={{ opacity: 1, width: '50%'}} 
              transition={{ duration: 0.8}} 
              className=' w-1/2 h-full absolute bg-[#a2c2dd] flex justify-center space-y-4 flex-col items-center text-center rounded-[150px] z-[2]'
            >
              <motion.h1 
                initial={{opacity: 0, x: 100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1 }} 
                className="text-2xl modamFont  text-[#ffffff] text-shadow"
              >
                خوش آمدید!
              </motion.h1>
              <motion.p 
                initial={{opacity: 0, x: 100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.2 }}  
                className="mb-[20px] text-[#44505a] text-sm modamFont "
              >
                قبلاً حساب کاربری دارید؟
              </motion.p>
              <motion.button 
                initial={{opacity: 0, x: 100}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.4}} 
                className='cursor-pointer text-[#eaebf4] py-1 px-[40px] modamFont  rounded-lg bg-[#1b4fbfcb] hover:bg-green-500 duration-300' 
                onClick={toLogin}
              >
                ورود
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className='absolute w-1/2 p-[14px] h-full left-0 flex items-center text-stone-950 text-center z-[10] bg-white'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <motion.h1 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.6}} 
              className='text-2xl modamFont  mb-[-10] mt-[-10] mx-0 text-[#364a68]'
            >
              ثبت نام
            </motion.h1>

            {isError && (
              <motion.div 
                initial={{opacity: 0, x: -50}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.7}}
                className="text-red-500 text-sm mb-2 modamFont "
              >
                {error.message}
              </motion.div>
            )}

            {isSuccess && (
              <motion.div 
                initial={{opacity: 0, x: -50}} 
                animate={{opacity: 1, x: 0}} 
                transition={{ duration: 0.6, delay: 1.7}}
                className="text-green-500 text-sm mb-2 modamFont "
              >
                ثبت نام با موفقیت انجام شد!
              </motion.div>
            )}

            <motion.div 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.8}} 
              className='mt-[15px] relative'
            >
              <input 
                type="text" 
                className='w-full p-[13px] bg-stone-100 rounded-xl border-0 text-sm font-bold'  
                placeholder='نام کاربری'
                {...register("name", {
                  required: "نام الزامی است",
                  minLength: {
                    value: 2,
                    message: "نام باید حداقل ۲ کاراکتر باشد"
                  }
                })}
              />
              <FaUserTie className="absolute mt-[-10%] text-xl text-zinc-400 mr-[89%]"/>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 modamFont ">{errors.name.message}</p>
              )}
            </motion.div>

            <motion.div 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 1.9}} 
              className='mt-[10px] relative'
            >
              <input 
                type="email" 
                className='w-full p-[13px] bg-stone-100 rounded-xl border-0 text-sm modamFont '  
                placeholder='ایمیل'
                {...register("email", {
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیل معتبر نیست"
                  }
                })}
              />
              <MdOutlineMailOutline className="absolute mt-[-10%] text-xl text-zinc-400 mr-[89%]"/>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 modamFont ">{errors.email.message}</p>
              )}
            </motion.div>

            <motion.div 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 2.0}} 
              className='mt-[10px] relative'
            >
              <input 
                type="tel" 
                className='w-full p-[13px] bg-stone-100 rounded-xl border-0 text-sm modamFont text-right'  
                placeholder='شماره تلفن'
                {...register("phone", {
                  required: "شماره تلفن الزامی است",
                  minLength: {
                    value: 10,
                    message: "شماره تلفن باید حداقل ۱۰ رقم باشد"
                  },
                  maxLength: {
                    value: 15,
                    message: "شماره تلفن باید حداکثر ۱۵ رقم باشد"
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "شماره تلفن باید فقط شامل اعداد باشد"
                  }
                })}
              />
              <FaPhone className="absolute mt-[-10%] text-lg text-zinc-400 mr-[89%]"/>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 modamFont ">{errors.phone.message}</p>
              )}
            </motion.div>

            <motion.div 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 2.1}} 
              className='mt-[10px] relative'
            >
              <input 
                type={showPassword ? "text" : "password"} 
                className='w-full p-[13px] bg-stone-100 rounded-xl border-0 text-sm modamFont '  
                placeholder='رمز عبور'
                {...register("password", {
                  required: "رمز عبور الزامی است",
                  minLength: {
                    value: 6,
                    message: "رمز عبور باید حداقل ۶ کاراکتر باشد"
                  }
                })}
              />
              <button className="absolute text-2xl  left-[4%] top-[25%] text-zinc-500 cursor-pointer z-10" onClick={handelShow}>
                {showPassword ? <CiRead /> : <CiUnread />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 modamFont ">{errors.password.message}</p>
              )}
            </motion.div>

            <motion.button 
              initial={{opacity: 0, x: -50}} 
              animate={{opacity: 1, x: 0}} 
              transition={{ duration: 0.6, delay: 2.2}} 
              className='w-full bg-[#1b4fbfcb] h-10 modamFont  rounded-xl text-[#fcfeff] cursor-pointer hover:opacity-70 hover:scale-105 duration-300 btn-shadow mt-[15px]'
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
                  در حال ثبت...
                </>
              ) : (
                "ثبت نام"
              )}
            </motion.button>
            <div className="flex absolute mt-[13%] mr-[26%]">
              <p className="modamFont text-[13px] text-gray-500 cursor-pointer hover:text-red-900 duration-300" onClick={handelClose}>خروج از صفحه ثبت نام</p>
              <GiExitDoor className="text-gray-700"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;