import React from "react";

const About = () => {
    return (
        <div
            id="About"
            className="mt-[1rem] mx-[1rem] md:mx-[3rem] flex justify-center items-center flex-col md:mt-[5rem] min-h-screen"
        >
            <div className="text-white text-4xl font-medium mb-4 border-b-4 border-pink-600 md:mr-24">
                {" "}
                About
            </div>
            <div className="flex items-start justify-center w-full flex-col md:flex-row pl-4">
                <div className="md:flex-1 font-medium text-xl md:text-3xl my-5 text-[#e8e1e1]">
                    Hi, I'm Rohit, Nice to meet you. Please take <br></br> a
                    look around
                </div>
                <div className=" text-white text-xs md:flex-1 md:text-base">
                    Delving into the dynamic world of web development, I have
                    carved my niche as a Frontend Developer with a keen eye for
                    detail and a passion for creating fluid, user-centric web
                    experiences. My expertise lies in harnessing the power of
                    HTML, CSS, and JavaScript, coupled with advanced frameworks
                    like Reactjs. I thrive on transforming complex designs into
                    interactive, responsive web interfaces, ensuring optimal
                    performance across all devices.
                </div>
            </div>
        </div>
    );
};

export default About;
