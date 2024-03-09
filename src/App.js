import React, { useState } from "react";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Work from "./pages/work/Work.jsx";
import Skills from "./pages/skills/Skills.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ImageSlider from "./pages/imageSlider/ImageSlider.jsx";
const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const togglePopup = (images) => {
        setIsPopupOpen(!isPopupOpen);
        setSelectedImages(images);
    };
    return (
        <>
            {isPopupOpen ? (
                <ImageSlider
                    images={selectedImages}
                    togglePopup={togglePopup}
                />
            ) : (
                <div className="flex-flex-col gap-60">
                    <Home />
                    <About />
                    <Skills />
                    <Work togglePopup={togglePopup} />
                    <Experience />
                    <Contact />
                </div>
            )}
        </>
    );
};

export default App;
//#0a192F NAVBAR
