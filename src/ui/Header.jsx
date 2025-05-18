import { useState } from "react";
import MainNav from "./MainNav";
import Login from "../pages/Login";
import { motion } from "framer-motion";
import Logo from '../assets/logo.png' 

function Header() {
    const [showLogin, setShowLogin] = useState(false);

    function toLogin () {
        setShowLogin(!showLogin);
    };

    return (
        <header className=' navbar-shadow'>

            <div className="bg-white backdrop-blur-md w-[75%] h-[10vh] m-auto mt-2 rounded-3xl grid grid-cols-2 items-center justify-center">

                <div className='flex items-center pr-7'>
                    <motion.img initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1 , x: 0}} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }}  src={Logo} alt="" className='w-24'/>
                    <div className="bg-"></div>
                </div>

                <div className="flex items-center justify-end pl-10">
                    <motion.button initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1 , x: 0}} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }} onClick={toLogin} className="btn">ثبت نام / ورود</motion.button>
                </div>
            </div>




            <MainNav />


            {showLogin && <Login />}


        </header>
    )
}

export default Header;