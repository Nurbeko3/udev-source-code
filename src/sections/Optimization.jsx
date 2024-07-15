import React from "react";
import { useTranslation } from "react-i18next";
import MainImg from "../assets/images/ERP/erp-main.png";
import Card from "../components/Card/Card";
import Arxitiktura from "../assets/images/Optimization/Arxitiktura.png";
import Testing from "../assets/images/Optimization/Testing.png";
import Stress from "../assets/images/Optimization/Stress.png";
import Load from "../assets/images/Optimization/Load.png";
import Devops from "../assets/images/Optimization/Devops.png";
import Cloud from "../assets/images/Optimization/Cloud.png";
import CD from "../assets/images/Optimization/CD.png";

const Optimization = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F4F7FF] pb-[100px]">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 text-[#1B5BF7] pb-[30px] pt-[60px]">
          {t("optimizationConsulting")}
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <img
            src={MainImg}
            alt={t("mainImageAlt")}
            className="w-full lg:w-[500px] mb-6 lg:mb-0"
          />
          <div className="flex flex-col lg:ml-10">
            <p className="font-medium text-[20px] text-center lg:text-left">
              {t("itSystemsDescription")}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-[40px]">
              <Card color={"#E0E8FF"} img={Arxitiktura} title={"Architecture"} />
              <Card color={"#E0E8FF"} img={Testing} title={"Auto testing"} />
              <Card color={"#E0E8FF"} img={Stress} title={"Stress testing"} />
              <Card color={"#E0E8FF"} img={Load} title={"Load testing"} />
              <Card color={"#E0E8FF"} img={Devops} title={"Devops"} />
              <Card color={"#E0E8FF"} img={Cloud} title={"Cloud"} />
              <Card color={"#E0E8FF"} img={CD} title={"CI / CD"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
