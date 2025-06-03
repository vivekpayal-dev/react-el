import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../utils/config";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '/src/assets/images/logo1.png'

const Header = () => {
    const location = useLocation();
    const [isMenuShow, setIsMenuShow] = useState(false)

    function handleShowMenu() {
        setIsMenuShow(!isMenuShow)
    }
    return (
        <header className="flex items-center text-white justify-between px-8 md:px-12 max-w-7xl mx-auto w-full py-10">
            <div>
                <Link to="/" className="text-2xl font-bold">
                    <img src={logo} alt="" className="max-w-[97px] object-cover" />
                </Link>
            </div>
            <nav className="hidden md:block">
                <ul className="relative flex justify-center border h-[56px] items-center rounded-[40px] border-white overflow-hidden">
                    {navLinks.map((link, index) => {
                        const isActive = link.href === location.pathname;
                        return (
                            <li key={index} className="relative h-full flex items-center px-8">
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 backdrop-blur-md bg-white/20 rounded-[40px]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <Link
                                    to={link.href}
                                    className="relative z-10 uppercase"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div>
                <Link to="/help" className="hidden md:block uppercase">Help</Link>
                <button className="block md:hidden " onClick={handleShowMenu}>
                    {isMenuShow ? <div className="rounded-full border border-white p-1"><X size={20} /></div> : <Menu size={25} />}
                </button>
                <div className={`mobile-menu-bar text-left ${isMenuShow ? "left-0 pointer-events-auto" : "-left-full pointer-events-none"}  z-[999] fixed top-0 h-full w-full  bg-white-300 bg-clip-padding backdrop-filter backdrop-blur-lg p-8 transition-all ease-in-out duration-150`}>
                    <button className="absolute top-5 border border-white rounded-full p-1  right-5 z-30" onClick={() => setIsMenuShow(false)}>
                        <X size={18} />
                    </button>
                    <ul className="relative flex flex-col overflow-hidden">
                        {navLinks.map((link, index) => {
                            const isActive = link.href === location.pathname;
                            return (
                                <li key={index} className="relative h-full flex items-center py-2">
                                    {isActive && (
                                        <div
                                            className="absolute inset-0 "
                                        />
                                    )}
                                    <Link
                                        to={link.href}
                                        className="relative z-10 uppercase"
                                         onClick={() => setIsMenuShow(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="relative h-full flex items-center py-2">
                            <Link to="/help" className="uppercase" onClick={() => setIsMenuShow(false)} >Help</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
