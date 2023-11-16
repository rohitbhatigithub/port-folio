import React from "react";
// import Logo from "../../assets/rohit.jpg";
import { ReactComponent as MenuIcon } from "../../assets/menuIcon.svg";
import { ReactComponent as CloseMenuIcon } from "../../assets/closemenu.svg";
const Navbar = ({ nav, hendlenavIcon }) => {
    // const activeLink = () => {
    //     color:"yellow",
    // };
    return (
        <>
            <div className="fixed flex items-center justify-between w-full  px-4 bg-[#142032] z-30 py-2">
                {/* portfolio logo */}
                <div className="text-pink-600 text-4xl italic font-semibold pt-6 border-b-4 border-pink-600">
                    Portfolio
                </div>
                {/* menu items */}
                <div className="hidden md:block text-white">
                    <ul className="flex items-center gap-6 text-xl font-medium">
                        <li
                            // onClick={activeLink}
                            className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200"
                        >
                            <a href="#home">Home</a>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                            <a href="#About">About</a>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                            <a href="#work">Work</a>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="z-10 md:hidden" onClick={hendlenavIcon}>
                    {nav ? (
                        <MenuIcon className="h-30 w-30" />
                    ) : (
                        <CloseMenuIcon />
                    )}
                </div>
            </div>
            {/* mobile view menu icon */}
            <div
                onClick={hendlenavIcon}
                className={
                    !nav
                        ? " fixed  top-0 w-full h-screen  flex justify-center items-center border text-white bg-[#181b20]  md:hidden"
                        : "hidden"
                }
            >
                <ul className=" text-xl font-medium flex flex-col gap-4">
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#home">Home</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#About">About</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#work">Work</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#experience">Experience</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-2 border-yellow-400 hover:text-yellow-200">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
