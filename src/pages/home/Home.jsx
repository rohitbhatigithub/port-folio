import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Intro from "../../components/intro/Intro";

const Home = () => {
    const [nav, setNav] = useState(true);
    const hendlenavIcon = () => setNav(!nav);
    return (
        <div id="home">
            <Navbar nav={nav} hendlenavIcon={hendlenavIcon} />
            <Intro nav={nav} />
        </div>
    );
};

export default Home;
