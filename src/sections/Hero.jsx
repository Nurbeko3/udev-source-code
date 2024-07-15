import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Header/Logo.png";
import HeroMain from "../assets/images/Hero/Hero-main.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[100px] mt-[72px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Site logo here"
              className="pb-[20px] mx-auto md:mx-0"
              width={200}
              height={200}
            />
            <h2 className="text-[#464359] text-[24px] md:text-[30px] font-bold pb-[10px]">
              {t("welcome")}
            </h2>
            <p className="text-[#1B5BF7] font-bold text-[16px] sm:text-[20px] md:text-[28px] typing-animation mb-[40px]">
              {t("description")}
            </p>
            <a
              className="px-[40px] py-[12px] rounded-md text-white bg-[#1B5BF7] mt-[20px] font-bold inline-block"
              href="#!"
            >
              {t("contact")}
            </a>
          </div>
          <div className="mt-10 md:mt-0">
            <img src={HeroMain} alt="" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
