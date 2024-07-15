import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import UX from "../assets/images/UI/UX.png";
import UI from "../assets/images/UI/UI.png";
import Prototyping from "../assets/images/UI/Prototyping.png";
import Mobile from "../assets/images/UI/Mobile.png";
import Web from "../assets/images/UI/Web.png";
import Atomic from "../assets/images/UI/Atomic.png";
import Figma from "../assets/images/UI/Figma.png";
import Sketch from "../assets/images/UI/Sketch.png";
import Illustrator from "../assets/images/UI/Illustrator.png";
import UImain from "../assets/images/UI/UI-main.png";

const UXandUI = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-[100px]">
      <div className="container mx-auto p-4 md:p-8">
        <h2
          className="pt-[60px] font-bold text-2xl md:text-4xl text-primary mb-4 md:mb-8 text-[#1B5BF7] text-[30px] md:text-[60px] pb-[20px] md:pb-[40px]"
          style={{ lineHeight: "1.2" }}
        >
          {t("ui.title")}
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-full md:w-auto md:mr-8">
            <p className="font-medium text-[18px] md:text-[20px] mb-4">
              {t("ui.description")}
            </p>
            <div className="flex flex-wrap gap-3 pb-3 pt-[20px] md:pt-[50px] justify-center md:justify-start">
              <Card color={"#F4F7FF"} img={UX} title={"UX Design"} />
              <Card color={"#F4F7FF"} img={UI} title={"UI Design"} />
              <Card color={"#F4F7FF"} img={Prototyping} title={"Prototyping"} />
              <Card color={"#F4F7FF"} img={Mobile} title={"Mobile Design"} />
              <Card color={"#F4F7FF"} img={Web} title={"Web Design"} />
              <Card color={"#F4F7FF"} img={Atomic} title={"Atomic Design"} />
            </div>
            <h3 className="font-bold text-[24px] md:text-[30px] mt-[20px] md:mt-[40px]">
              {t("ui.technologies")}
            </h3>
            <div className="flex flex-wrap gap-10 mt-8 justify-center md:justify-start">
              <div className="text-center">
                <img src={Figma} alt="Figma img" />
                <span className="font-bold text-[18px] mt-[20px] block">
                  Figma
                </span>
              </div>
              <div className="text-center">
                <img src={Sketch} alt="Sketch img" />
                <span className="font-bold text-[18px] mt-[20px] block">
                  Sketch
                </span>
              </div>
              <div className="text-center">
                <img src={Illustrator} alt="Illustrator img" />
                <span className="font-bold text-[18px] mt-[20px] block">
                  Illustrator
                </span>
              </div>
            </div>
          </div>
          <img
            src={UImain}
            alt="UI main image"
            width={400}
            className="mt-8 md:mt-0 md:mr-[70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default UXandUI;
