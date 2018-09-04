import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      swipe: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Slider {...settings}>
        <div>
          <img objectFit="contain" height="300px" src="https://www.nationalgeographic.com/content/dam/travel/2017-digital/iceland-myths/trolls-toes-reynisdrangar-vik-iceland.ngsversion.1502219625114.adapt.1900.1.jpg" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
