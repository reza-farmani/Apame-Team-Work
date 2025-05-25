import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import Logo from '../assets/logo.png';
import MainNav from "./MainNav";

function Header() {
    const navigate = useNavigate(); 

    function handleSignupClick() {
        navigate('/signup'); 
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
                            onClick={handleSignupClick} 
                            className="btn">
                            ثبت نام / ورود
                        </motion.button>
                    </div>
                </div>
                <MainNav />
            </header>
        </>
    )
}

export default Header;