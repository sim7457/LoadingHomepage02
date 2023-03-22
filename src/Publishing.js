import React from "react";
import Carousel from "./Carousel";

const Publishing = () => {
  return (
    <>
      <Carousel title="Kakao" num="01" imgSrc="./img/bg01.jpg" imgAlt="kakao" />
      <Carousel title="Toss" num="02" imgSrc="./img/bg02.jpg" imgAlt="toss" />
      <Carousel
        title="Aston Martin"
        num="03"
        imgSrc="./img/bg03.jpg"
        imgAlt="Aston Martin"
      />
      <Carousel
        title="Lotte Engineering & Construction"
        num="04"
        imgSrc="./img/bg04.jpg"
        imgAlt="Lotte Engineering & Construction"
      />
      <Carousel
        title="New World Construction"
        num="05"
        imgSrc="./img/bg05.jpg"
        imgAlt="New World Construction"
      />
    </>
  );
};

export default Publishing;
