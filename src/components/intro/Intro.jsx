import React from "react";
import SocialItems from "../intro/socialitems/SocialItems";
import IntroSection from "../intro/introsection/Introsection";
const Intro = ({ nav }) => {
    return (
        <div className="flex items-center justify-between">
            <SocialItems />
            <IntroSection nav={nav} />
        </div>
    );
};

export default Intro;
