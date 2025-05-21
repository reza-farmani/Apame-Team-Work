import { useState } from "react";
import { motion } from "framer-motion";
import Logo from '../assets/logo.png';
import SignUp from "../pages/signUp";
import Login from "../pages/Login"; 
import MainNav from "./MainNav";

function Header() {
    const [activeForm, setActiveForm] = useState(null); 

    function toggleForm(formType) {
        setActiveForm(activeForm === formType ? null : formType);
    };

    return (
        <>
            <header className='navbar-shadow'>
                <div className="bg-white backdrop-blur-md w-[75%] h-[10vh] m-auto mt-2 rounded-3xl grid grid-cols-2 items-center justify-center">
                    <div className='flex items-center pr-7'>
                        <motion.img 
                            initial={{ opacity: 0, x: 50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.8, delay: 0.2 }}  
                            src={Logo} 
                            alt="" 
                            className='w-24'
                        />
                    </div>

                    <div className="flex items-center justify-end pl-10">
                        <motion.button 
                            initial={{ opacity: 0, x: -50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.8, delay: 0.2 }} 
                            onClick={() => toggleForm('signup')} 
                            className="btn">
                            ثبت نام / ورود
                        </motion.button>
                    </div>
                </div>
                <MainNav />
            </header>

            {activeForm === 'signup' && (
                <SignUp 
                    onSwitchToLogin={() => setActiveForm('login')}
                    onClose={() => setActiveForm(null)}
                />
            )}
            
            {activeForm === 'login' && (
                <Login 
                    onSwitchToSignup={() => setActiveForm('signup')}
                    onClose={() => setActiveForm(null)}
                />
            )}
        </>
    )
}

export default Header;