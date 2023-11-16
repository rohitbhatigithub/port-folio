import React from "react";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Work from "./pages/work/Work.jsx";
import Skills from "./pages/skills/Skills.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Contact from "./pages/contact/Contact.jsx";
const App = () => {
    return (
        <div className="flex-flex-col gap-60">
            <Home />
            <About />
            <Skills />
            <Work />
            <Experience />
            <Contact />
        </div>
    );
};

export default App;
//#0a192F NAVBAR
