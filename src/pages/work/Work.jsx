import React from "react";
import Img1 from "../../assets/projectPic/pic1.png";
import Img2 from "../../assets/projectPic/pic2.png";
import Img3 from "../../assets/projectPic/pic3.png";
import Img4 from "../../assets/projectPic/pic4.png";
import Img5 from "../../assets/projectPic/pic5.png";
import Img6 from "../../assets/projectPic/pic6.png";
import Img7 from "../../assets/projectPic/pic7.png";
import hal1 from "../../assets/hal project//hal1.jpg";
import hal2 from "../../assets/hal project//hal2.jpg";
import hal3 from "../../assets/hal project//hal3.jpg";
const Work = ({ togglePopup }) => {
    const handleViewTeamMaster = () => {
        const teamMasterImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
        togglePopup(teamMasterImages);
    };
    const hendleHalProjectPics = () => {
        const HalProjectImages = [hal1, hal2, hal3];
        togglePopup(HalProjectImages);
    };
    return (
        <div id="work" className="min-h-screen pt-[8rem]">
            <div className="  flex justify-center items-center">
                <div className="border-b-4 border-pink-600 text-white text-4xl">
                    Work
                </div>
            </div>
            <div className="mt-[4rem]">
                {/* <div className="flex justify-center items-center w-[80%] m-auto">
                    <div className="text-base font-medium md:text-4xl  text-[#ccd6f6] md:flex-1 md:font-bold">
                        Front-End Developer <br></br>Newton School{" "}
                    </div>
                    <div className="text-[#ccd6f6] flex-1 tracking-widest text-justify">
                        {" "}
                        Learned Data Structure and Algorithms and Problem
                        Solving. Learned Technical Stack : Html, Css,
                        JavaScript, Reactjs. Worked on various project like the
                        MovieWeb, E-commerce web and more. Participate in weekly
                        Coding Contest.
                    </div>
                </div> */}
                {/* <br></br>
                <br></br> */}
                <div className="flex justify-center items-center gap-4 md:w-[80%] m-auto border-b-2 pb-4 pl-4">
                    <div className="text-base font-medium md:text-4xl  text-[#ccd6f6] md:flex-1 md:font-bold">
                        Team Master Pro
                    </div>
                    <div className="text-xs pr-4 text-[#ccd6f6] md:flex-1  text-justify md:text-xl">
                        <div className="flex items-center justify-between gap-1 ">
                            <div className="text-sm md:text-2xl">
                                Technology:{" "}
                            </div>
                            <div className="text-xs md:text-xl pr-5">
                                Html, Tailwind,<br></br>Sass, React, Router,etc.
                            </div>
                        </div>
                        <br></br>
                        Dynamic and innovative professional adept at leveraging
                        modern technology to streamline fantasy sports team
                        creation across various platforms. With expertise in
                        crafting winning strategies and utilizing data analysis,
                        I have developed a cutting-edge app, CleanSweep Fantasy
                        Team & Guide, catering to the needs of fantasy sports
                        enthusiasts.
                        <br></br>
                        <br></br>
                        <div className="flex justify-between items-center">
                            <a
                                className="text-blue-600 text-base px-8 md:text-2xl border md:px-10 rounded-xl hover:text-white "
                                href="https://play.google.com/store/apps/details?id=com.logikdot.teammasterpro"
                                target="blank"
                            >
                                Link
                            </a>

                            <div
                                className="text-blue-600 text-base px-8 md:text-2xl border md:px-10 rounded-xl hover:text-white cursor-pointer"
                                onClick={handleViewTeamMaster}
                            >
                                View
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="flex justify-center items-center gap-4 md:w-[80%] m-auto border-b-2 pb-4 pl-4">
                    <div className="text-base font-medium md:text-4xl  text-[#ccd6f6] md:flex-1 md:font-bold">
                        Hal
                    </div>
                    <div className="text-xs pr-4 text-[#ccd6f6] md:flex-1 md:tracking-widest text-justifytext-[#ccd6f6]  text-justify md:text-xl">
                        <div className="flex items-center justify-between gap-1 mb-4 ">
                            <div className="text-sm md:text-2xl">
                                Technology:{" "}
                            </div>
                            <div className="text-xs md:text-xl ">
                                Html,Css,<br></br>Javascript,Reactjs,Tailwind
                            </div>
                        </div>
                        HAL, a part of OJAS AEROSPACE Pvt. Ltd., works on the
                        principle of maximum output from minimum input. A B2C
                        and a B2B company with a vision of employment generation
                        in the rural parts. Here farmers can easily buy crop
                        inputs, sell their crop products at very profitable
                        rates, they can hire workers and equipment as per their
                        needs. Crop Monitoring with the help of drones and using
                        its high-quality images on various parameters, farmers
                        are advised on different aspects be it Crop Protection,
                        Irrigation etc
                        <br></br>
                        <br></br>
                        <div className="flex items-center gap-4 md:justify-between">
                            <a
                                className="text-blue-600 text-base px-4 md:text-2xl border md:px-10 rounded-xl hover:text-white"
                                href="https://play.google.com/store/apps/details?id=com.kisaanstation.kisaanstation&pcampaignid=web_share"
                                target="blank"
                            >
                                Link
                            </a>

                            <div
                                className="text-blue-600 text-base px-4
                                md:text-2xl border md:px-10 rounded-xl
                                hover:text-white"
                                onClick={hendleHalProjectPics}
                            >
                                View
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 md:w-[80%] m-auto border-b-2 pb-4 pl-4 pt-6">
                    <div className="text-base font-medium md:text-4xl  text-[#ccd6f6] md:flex-1 md:font-bold">
                        Jax
                    </div>
                    <div className="text-xs pr-4 text-[#ccd6f6] md:flex-1 md:tracking-widest  text-justify md:text-xl">
                        <div className="flex items-center justify-between gap-1  mb-4 ">
                            <div className="text-sm md:text-2xl">
                                Technology:{" "}
                            </div>
                            <div className="text-xs md:text-xl pr-5">
                                Html,Css,React,Tailwind
                            </div>
                        </div>
                        Experienced in developing and managing a trading
                        application designed to empower users to make informed
                        decisions based on signals provided by an admin. Skilled
                        in creating seamless user experiences within the realm
                        of financial technology, I have contributed to the
                        development and deployment of a cutting-edge trading
                        platform.
                        <br></br>
                        <br></br>
                        <div className="flex items-center gap-4 md:justify-between">
                            Work in progress....
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 md:w-[80%] m-auto border-b-2 pb-4 pl-4 pt-6">
                    <div className="text-xs pl-1 font-medium md:text-4xl  text-[#ccd6f6] md:flex-1 md:font-bold">
                        Gadget
                    </div>
                    <div className="text-xs pr-4 text-[#ccd6f6] md:flex-1 md:tracking-widest   text-justify md:text-xl">
                        <div className="flex items-center justify-between   mb-4 ">
                            <div className="text-sm md:text-2xl">
                                Technology:{" "}
                            </div>
                            <div className="text-xs md:text-xl pr-5">
                                Html,Css, Aos,React-Icon<br></br>
                                Javascript,Reactjs,Tailwind
                            </div>
                        </div>
                        Dedicated and proficient developer with expertise in
                        crafting personalized projects within the realm of
                        e-commerce. Gadget Cart stands as a testament to my
                        commitment to delivering innovative solutions tailored
                        to niche markets. Specializing in the realm of gadgets,
                        this project encapsulates a user-centric e-commerce
                        platform designed exclusively for gadget enthusiasts.
                        <br></br>
                        <br></br>
                        <div className="flex items-center gap-4 md:justify-between">
                            <a
                                className="text-blue-600 text-base px-4 md:text-2xl border md:px-10 rounded-xl hover:text-white"
                                href="https://gadget-cart-rohitbhatia.netlify.app/"
                                target="blank"
                            >
                                Demo
                            </a>

                            <a
                                className="text-blue-600 text-base px-4 md:text-2xl border md:px-10 rounded-xl hover:text-white"
                                href="https://github.com/rohitbhatigithub/gadget-cart"
                                target="blank"
                            >
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
