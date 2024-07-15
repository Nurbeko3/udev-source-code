import React from "react";
import ClientsCarousel from "../components/ClientsCarousel/ClientsCarousel";
import ClientsCarouselRight from "../components/ClientsCarousel/ClientsCarouselRight";
import { useTranslation } from "react-i18next";

const OurClients = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h2
          className="pt-[60px] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 md:mb-8 text-[#1B5BF7] pb-[20px] sm:pb-[30px] md:pb-[40px]"
          style={{ lineHeight: "1.2" }}
        >
          {t("OurClients.title")}
        </h2>
        <ClientsCarousel />
        <ClientsCarouselRight />
      </div>
    </section>
  );
};

export default OurClients;
