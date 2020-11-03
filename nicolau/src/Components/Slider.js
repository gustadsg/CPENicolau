import React from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MySlider(props) {
  const settings = {
    autoplay: true,
    centerMode: true,
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        {props.children}
      </Slider>
    </div>
  );
}
