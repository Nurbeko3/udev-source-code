
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Maxtrack from "../../assets/images/Clients/Maxtrack.png";
import Smsuz from "../../assets/images/Clients/Smsuz.png";
import GoodZone from "../../assets/images/Clients/GoodZone.png";
import Z from "../../assets/images/Clients/Z.png";
import Workly from "../../assets/images/Clients/Workly.png";
import Mytaxi from "../../assets/images/Clients/Mytaxi.png";
import Shef from "../../assets/images/Clients/Shef.png";

const clientLogos = [Maxtrack, Smsuz, GoodZone, Z, Workly, Mytaxi, Shef];

const ClientsCarouselRight = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          rtl: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rtl: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
        },
      },
    ],
  };

  return (
    <div className="clients-carousel">
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img className="outline-none" src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsCarouselRight;
