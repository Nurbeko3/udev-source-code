import React from "react";
import { useTranslation } from "react-i18next";

import teamIicon from "../assets/images/OurService/Team-small.png";
import Development from "../assets/images/OurService/Development-small.png";
import ERP from "../assets/images/OurService/ERP-small.png";
import Interface from "../assets/images/OurService/Interface-small.png";
import Optimization from "../assets/images/OurService/Optimization-small.png";
import Consulting from "../assets/images/OurService/Consulting-small.png";

export default function OurService() {
  const { t } = useTranslation();

  return (
    <section className="our-service" id="our-service">
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-background p-4 md:p-8 pb-[50px] md:pb-[100px]">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-8 text-[#1B5BF7] pb-[40px] md:pb-[70px] text-[30px] md:text-[60px]">
            {t("ourServices")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex bg-[#F4F7FF] flex-col card">
              <img
                alt="team-icon"
                src={teamIicon}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("team")}
              </span>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex flex-col bg-[#F4F7FF] card">
              <img
                alt="mobile-app-icon"
                src={Development}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("developmentMobile")}
              </span>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex flex-col bg-[#F4F7FF] card">
              <img
                alt="erp-icon"
                src={ERP}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("erpSystems")}
              </span>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex flex-col bg-[#F4F7FF] card">
              <img
                alt="ui-ux-icon"
                src={Interface}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("uiUxDesign")}
              </span>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex flex-col bg-[#F4F7FF] card">
              <img
                alt="optimization-icon"
                src={Optimization}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("optimizationConsulting")}
              </span>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg shadow-md flex flex-col bg-[#F4F7FF] card">
              <img
                alt="it-consulting-icon"
                src={Consulting}
                className="mr-4 pb-[15px] md:pb-[25px]"
                width={35}
                height={35}
              />
              <span className="text-card-foreground text-sm md:text-lg font-medium">
                {t("itConsulting")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
