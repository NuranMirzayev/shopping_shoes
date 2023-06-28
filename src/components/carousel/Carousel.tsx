import React, { useState, useEffect } from "react";
// import { IconButton } from '@mui/material';
// import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import { ImgUrl } from '../../utils/types';

import "./carousel.css";
import { images } from "../../utils/constants";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  /// images.length ispolzuyu kak beskonecnuyu chikil (infinity)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <img
        className="carousel_img"
        src={images[currentImage].imgUrl}
        alt="hello"
      />
    </div>
  );
};

export default Carousel;
