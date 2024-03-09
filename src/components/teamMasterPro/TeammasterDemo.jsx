import React from "react";
import Img1 from "../../assets/projectPic/pic1.png";
import Img2 from "../../assets/projectPic/pic2.png";
import Img3 from "../../assets/projectPic/pic3.png";
import Img4 from "../../assets/projectPic/pic4.png";
import Img5 from "../../assets/projectPic/pic5.png";
import Img6 from "../../assets/projectPic/pic6.png";
import Img7 from "../../assets/projectPic/pic7.png";
import ImageSlider from "./../../pages/imageSlider/ImageSlider";
const TeammasterDemo = () => {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
    console.log(images);
    return <ImageSlider images={images} />;
};

export default TeammasterDemo;
