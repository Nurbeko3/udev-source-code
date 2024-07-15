import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";

import Website from "../assets/images/Delever/Website.png";
import Admin from "../assets/images/Delever/Admin.png";
import Crossplatform from "../assets/images/Delever/Crossplatform.png";
import SmsLogo from "../assets/images/Smsuz/Sms-logo.png";
import SmsMain from "../assets/images/Smsuz/SmsMain.png";

const Smsuz = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={SmsLogo}
              alt="Logo img"
              className="pb-[30px] mx-auto lg:mx-0"
            />
            <span className="block text-center lg:text-left px-[10px] py-[5px] bg-[#DAE3FA] text-[#1B5BF7] w-[100px] rounded-[15px] text-[14px] mx-auto lg:mx-0">
              {t("Notification")}
            </span>
            <p className="font-medium text-[24px] pt-[20px] text-center lg:text-left">
              {t("SmsuzDescription")}
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
          <img src={SmsMain} alt="Main img" className="w-full lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Smsuz;
