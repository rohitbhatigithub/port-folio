import React from "react";

const Experience = () => {
    return (
        <div id="experience" className=" m-auto pt-[10rem] min-h-screen">
            <div className="  flex justify-center items-center ">
                <div className="border-b-4 border-pink-600 text-white text-4xl">
                    Experience
                </div>
            </div>
            <div id="experience" className="text-white  pt-[6rem] pl-6 mb-10">
                {/* newton schhool */}
                <div className="flex justify-center gap-2 items-start w-full md:w-[80%] md:m-auto">
                    <div className="text-base font-medium text-[#ccd6f6] flex-1 md:text-4xl">
                        Logiksphere Solution PVT.LTD.
                    </div>
                    <div className="text-[#ccd6f6] text-xs mr-1  md:text-justify  md:flex-1 md:text-xl">
                        {" "}
                        Building responsive websites for company using ReactJS.
                        Worked with libraries like formik, redux, redux-toolkit
                        , bootstrap. Handling state management using redux.
                        Design table component which stores data in table
                        format. Design responsive login page functionalities
                        which has custom radio button using formik library. This
                        functionality can be visible on mobile and also on
                        laptop. Design DM functionalities which is also
                        responsive and also route based. This functionality
                        joins new employees and owners. Design (Halsathi)
                        component in which we can buy or sell assets. Learned
                        Data Structure and Algorithms and Problem Solving.
                    </div>
                </div>
                <br></br>
                <br></br>
                {/* ojas aerospace */}
                <div className="flex justify-center items-start gap-2  w-full md:w-[80%] md:m-auto">
                    {/* <div className="text-base font-medium text-[#ccd6f6] flex-1 md:text-4xl">
                        Logiksphere Solution PVT.LTD.
                    </div> */}
                    <div className="text-base font-medium text-[#ccd6f6] flex-1 md:text-4xl">
                        Front-End Developer <br></br>Newton School{" "}
                    </div>
                    <div className="text-[#ccd6f6] text-xs mr-1  md:text-justify  md:flex-1 md:text-xl">
                        Learned Technical Stack : Html, Css, JavaScript,
                        Reactjs. Worked on various project like the MovieWeb,
                        E-commerce web and more. Participate in weekly Coding
                        Contest.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
