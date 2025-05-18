import { useState } from "react";
import MainNav from "./MainNav";
import Login from "../pages/Login";


function Header() {
    const [showLogin, setShowLogin] = useState(false);

    function toLogin () {
        setShowLogin(!showLogin);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <MainNav />
            <button onClick={toLogin}>ورود/ثبت نام</button>
            
            {showLogin && <Login />}
        </header>
    )
}

export default Header;