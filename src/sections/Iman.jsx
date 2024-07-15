import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";

import Website from "../assets/images/Delever/Website.png";
import Admin from "../assets/images/Delever/Admin.png";
import Crossplatform from "../assets/images/Delever/Crossplatform.png";
import ImanLogo from "../assets/images/Iman/ImanLogo.png";
import ImanMain from "../assets/images/Iman/ImanMain.png";

const Iman = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={ImanLogo}
              alt="Logo img"
              className="pb-[30px] mx-auto lg:mx-0"
            />
            <span className="block text-center lg:text-left px-[10px] py-[5px] bg-[#CCF4EF] text-[#09CCB2] w-[100px] rounded-[15px] text-[14px] mx-auto lg:mx-0">
              {t("Finance")}
            </span>
            <p className="font-medium text-[24px] pt-[20px] text-center lg:text-left">
              {t("ImanDescription")}
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
            </div>
          </div>
          <img src={ImanMain} alt="Main img" className="w-full lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Iman;
