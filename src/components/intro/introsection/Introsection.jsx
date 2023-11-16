import React from "react";

const Introsection = ({ nav }) => {
    return (
        <div className="flex items-center min-h-screen w-full">
            {nav && (
                <div className="text-white absolute pl-4 top-[20%] md:ml-[36%] ">
                    <div className="text-pink-600 text-xl">Hi, my name is </div>
                    <div className="text-4xl sm:text-4xl font-bold text-[#ccd6f6]">
                        Rohit Bhatia
                    </div>
                    <div className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                        i'm a Frontend Developer
                    </div>
                    <div className="text-xs text-[#8892b0] mt-2 md:text-sm">
                        Experienced Front-End Developer skilled in creating
                        responsive, engaging websites and applications.<br></br>{" "}
                        With a deep understanding of HTML, CSS, JavaScript,
                        React, I ensure each project is visually stunning and
                        technically robust. Committed <br></br> to delivering
                        exceptional user experiences, I specialize in designing
                        interactive interfaces that seamlessly blend design with
                        functionality,<br></br> from corporate websites to
                        e-commerce platforms.
                    </div>
                    <div className="flex items-center justify-between border-2 border-gray-100 w-[9rem] p-2 mt-2 cursor-pointer hover:bg-[#151535dd]">
                        <div>
                            <a href="#work">View work</a>
                        </div>
                        <span className="material-symbols-outlined text-pink-600 text-2xl">
                            arrow_forward
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Introsection;
