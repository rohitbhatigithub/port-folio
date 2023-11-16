import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Javascript } from "../../assets/js.svg";
import { ReactComponent as JsReact } from "../../assets/react.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Redux } from "../../assets/redux.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwind.svg";
import { ReactComponent as Sass } from "../../assets/sass.svg";
const Skills = () => {
    return (
        <div id="skills" className="min-h-screen pt-[8rem] md:pt-[2rem]">
            <div className=" flex justify-center items-center text-center  md:pt-[10rem] ">
                <div className="border-b-4 border-pink-600 text-white text-4xl">
                    Skills
                </div>
            </div>
            <div className=" w-full flex justify-center items-center flex-wrap md:w-[80%] pl-6 md:pl-[12rem] md:pt[10rem] ">
                <div className="flex items-center justify-center flex-wrap">
                    {/* html */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Html className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem] " />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            HTML
                        </p>
                    </div>
                    {/* css */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Css className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            CSS
                        </p>
                    </div>
                    {/* javascript */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Javascript className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            JAVASCRIPT
                        </p>
                    </div>
                    {/* react */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <JsReact className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            REACT
                        </p>
                    </div>
                    {/* git */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Github className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            GITHUB
                        </p>
                    </div>
                    {/* reduc */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Redux className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            REDUX
                        </p>
                    </div>
                    {/* tailwind */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Tailwind className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            TAILWIND
                        </p>
                    </div>
                    {/* scss */}
                    <div className="m-4 shadow-lg text-center  border-2 border-pink-400 rounded-sm">
                        <Sass className="w-[5rem] h-[5rem] md:w-[10rem] md:h-[8rem]" />
                        <p className="my-2 text-white italic text-xs md:text-sm">
                            SASS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
