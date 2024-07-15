import React from "react";
import { useTranslation } from "react-i18next";
import DeleverWrite from "../assets/images/Delever/Delever.png";
import DeleverMain from "../assets/images/Delever/Delever-main.png";
import Card from "../components/Card/Card";

import Website from "../assets/images/Delever/Website.png";
import Admin from "../assets/images/Delever/Admin.png";
import Crossplatform from "../assets/images/Delever/Crossplatform.png";
import Webdesign from "../assets/images/Delever/Webdesign.png";
import Mobiledesign from "../assets/images/Delever/Mobiledesign.png";

const Delever = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <img src={DeleverMain} alt="Main img" className="w-full lg:w-1/2" />
          <div className="w-full lg:w-1/2">
            <img
              src={DeleverWrite}
              alt="Logo img"
              className="pb-[30px] mx-auto lg:mx-0"
            />
            <span className="block text-center lg:text-left px-[10px] py-[5px] bg-[#FFDDD3] text-[#FF5722] w-[100px] rounded-[15px] text-[14px] mx-auto lg:mx-0">
              {t("Delivery")}
            </span>
            <p className="font-medium text-[24px] pt-[20px] text-center lg:text-left">
              {t("DeleverDescription")}
            </p>
            <h3 className="font-bold text-[20px] pt-[26px] text-center lg:text-left">
              {t("WhatWeDid")}
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pb-3 pt-[20px]">
              <Card color={"#F4F7FF"} img={Website} title={t("Website")} />
              <Card color={"#F4F7FF"} img={Admin} title={t("Admin")} />
              <Card
                color={"#F4F7FF"}
                img={Crossplatform}
                title={t("Crossplatform")}
              />
              <Card color={"#F4F7FF"} img={Webdesign} title={t("Webdesign")} />
              <Card
                color={"#F4F7FF"}
                img={Mobiledesign}
                title={"Mobile design"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delever;
