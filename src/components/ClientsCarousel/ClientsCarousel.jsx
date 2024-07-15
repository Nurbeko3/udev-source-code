import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Delever from "../../assets/images/Clients/Delever.png";
import Fonon from "../../assets/images/Clients/Fonon.png";
import Hamkor from "../../assets/images/Clients/Hamkor.png";
import Hoshimov from "../../assets/images/Clients/Hoshimov.png";
import Iman from "../../assets/images/Clients/Iman.png";
import Akfa from "../../assets/images/Clients/Akfa.png";
import Space from "../../assets/images/Clients/Space.png";

const clientLogos = [Delever, Fonon, Hamkor, Hoshimov, Iman, Akfa, Space];

const ClientsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

export default ClientsCarousel;
