import React from "react";
import { useTranslation } from "react-i18next";

import IOS from "../assets/images/Development/IOS.png";
import Android from "../assets/images/Development/Android.png";
import Crossplatform from "../assets/images/Development/Crossplatform.png";
import Swift from "../assets/images/Development/Swift.png";
import Kotlin from "../assets/images/Development/Kotlin.png";
import Flutter from "../assets/images/Development/Flutter.png";
import mainImg from "../assets/images/Development/img.png";
import Card from "../components/Card/Card";

const Development = () => {
  const { t } = useTranslation();

  return (
    <section id="development-section" className="pt-[60px] pb-[50px]">
      <div className="container mx-auto p-4 md:p-8">
        <div className="w-full md:w-[700px] gap-5">
          <h2
            className="font-bold text-2xl md:text-4xl text-primary mb-4 md:mb-8 text-[#1B5BF7] text-[30px] md:text-[60px] pb-[20px] md:pb-[40px]"
            style={{ lineHeight: "1.2" }}
          >
            {t("developmentMobile")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="w-full order-2 md:order-1">
            <p className="font-medium text-base md:text-[24px] pb-[20px] md:pb-[30px]">
              {t("developmentDescription")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-[20px] md:pb-[50px] items-center justify-center">
              <div className="flex justify-center">
                <Card color={"#F4F7FF"} img={IOS} title={t("ios")} />
              </div>
              <div className="flex justify-center">
                <Card color={"#F4F7FF"} img={Android} title={t("android")} />
              </div>
              <div className="flex justify-center">
                <Card
                  color={"#F4F7FF"}
                  img={Crossplatform}
                  title={t("crossplatform")}
                />
              </div>
            </div>
            <h3 className="font-bold text-lg md:text-[30px] text-center md:text-left">
              {t("technologies")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8 items-center justify-center md:justify-start">
              <div className="text-center">
                <img src={Swift} alt="Swift img" className="mx-auto" />
                <span className="font-bold text-sm md:text-[18px] pt-[50px] md:pt-[100px] block">
                  {t("swift")}
                </span>
              </div>
              <div className="text-center">
                <img src={Kotlin} alt="Kotlin img" className="mx-auto" />
                <span className="font-bold text-sm md:text-[18px] pt-[50px] md:pt-[100px] block">
                  {t("kotlin")}
                </span>
              </div>
              <div className="text-center">
                <img src={Flutter} alt="Flutter img" className="mx-auto" />
                <span className="font-bold text-sm md:text-[18px] pt-[50px] md:pt-[100px] block">
                  {t("flutter")}
                </span>
              </div>
            </div>
          </div>
          <img
            src={mainImg}
            alt="Development main image"
            className="w-full md:w-auto h-auto max-w-xs md:max-w-full order-1 md:order-2 md:mr-[150px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Development;
