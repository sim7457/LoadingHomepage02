import React, { useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = ({ title, num, imgSrc, imgAlt }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // The rest of the useEffect code from the previous response
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">{title}</div>
          <div className="num">{num}</div>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
