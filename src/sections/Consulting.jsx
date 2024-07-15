import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card/Card";
import Frontend from "../assets/images/Consulting/Frontend.png";
import Backend from "../assets/images/Consulting/Backend.png";
import Arxitiktura from "../assets/images/Optimization/Arxitiktura.png";
import Devops from "../assets/images/Optimization/Devops.png";
import UXUI from "../assets/images/Consulting/UXUI.png";
import QA from "../assets/images/Consulting/QA.png";
import ConsultingMain from "../assets/images/Consulting/Consulting-main.png";

const Consulting = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-[100px]">
      <div className="container mx-auto p-4 md:p-8">
        <div className="w-full text-center md:text-left pt-[50px]">
          <h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 md:mb-8 text-[#1B5BF7] pb-[20px] sm:pb-[30px] md:pb-[40px]"
            style={{ lineHeight: "1.2" }}
          >
            {t("itConsulting")}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className="font-medium text-[18px] md:text-[20px] mb-6 md:mb-8 text-center md:text-left">
              {t("itConsultingDescription")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Card color={"#F4F7FF"} img={Frontend} title={t("frontend")} />
              <Card color={"#F4F7FF"} img={Backend} title={t("backend")} />
              <Card
                color={"#F4F7FF"}
                img={Arxitiktura}
                title={t("architecture")}
              />
              <Card color={"#F4F7FF"} img={Devops} title={t("devops")} />
              <Card color={"#F4F7FF"} img={UXUI} title={t("uxui")} />
              <Card color={"#F4F7FF"} img={QA} title={t("qa")} />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={ConsultingMain}
              alt={t("consultingMainAlt")}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
