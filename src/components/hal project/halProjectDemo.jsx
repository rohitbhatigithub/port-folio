import React from "react";

import Img1 from "../../assets/hal project//hal1.jpg";
import Img2 from "../../assets/hal project//hal2.jpg";
import Img3 from "../../assets/hal project//hal3.jpg";
import ImageSlider from "./../../pages/imageSlider/ImageSlider";
const halProjectDemo = (togglePopup) => {
    const images = [Img1, Img2, Img3];

    return <ImageSlider images={images} togglePopup={togglePopup} />;
};

export default halProjectDemo;
