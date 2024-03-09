/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/projectPic/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/projectPic/rightArrow.svg";
import { ReactComponent as CrossIcon } from "../../assets/projectPic/cancel.svg";

const ImageSlider = ({ images, togglePopup }) => {
    console.log(images);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    if (images.length === 0) {
        return <div>{console.log("No images to display")}</div>;
    }
    const handleClickLeft = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleClickRight = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <div className="text-2xl text-white">
            <div className="relative w-full h-screen flex justify-center items-center">
                <LeftArrow
                    onClick={handleClickLeft}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
                />
                <img
                    className="w-[80%] max-h-[80%] object-contain mx-auto"
                    src={images[currentImageIndex]}
                    alt="Current Image"
                />
                <RightArrow
                    onClick={handleClickRight}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                />
                <CrossIcon
                    className="absolute top-0 right-0 m-4 cursor-pointer"
                    onClick={togglePopup}
                />
            </div>
        </div>
    );
};

export default ImageSlider;
