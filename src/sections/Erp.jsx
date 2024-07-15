import React from "react";
import { useTranslation } from "react-i18next";
import erpmain from "../assets/images/ERP/erp-main.png";
import CRM from "../assets/images/ERP/CRM.png";
import Learning from "../assets/images/ERP/Learning.png";
import Commerce from "../assets/images/ERP/Commerce.png";
import POS from "../assets/images/ERP/POS.png";
import SMS from "../assets/images/ERP/SMS.png";
import Warehouse from "../assets/images/ERP/House.png";
import Card from "../components/Card/Card";

const Erp = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F4F7FF] mt-[25px] pb-[100px]">
      <div className="container mx-auto p-4 md:p-8">
        <div className="w-full md:w-[700px] pt-[50px]">
          <h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 md:mb-8 text-[#1B5BF7] pb-[20px] sm:pb-[30px] md:pb-[40px]"
            style={{ lineHeight: "1.2" }}
          >
            {t("erp.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img
            src={erpmain}
            alt={t("erp.imageAlt")}
            className="w-full order-2 md:order-1"
            width={400}
          />
          <div className="w-full order-1 md:order-2">
            <p className="text-[18px] md:text-[20px] mb-8">
              {t("erp.description")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3 pt-[20px] md:pt-[50px]">
              <Card color={"#E0E8FF"} img={CRM} title={t("erp.crm")} />
              <Card color={"#E0E8FF"} img={Learning} title={t("erp.learning")} />
              <Card color={"#E0E8FF"} img={Commerce} title={t("erp.commerce")} />
              <Card color={"#E0E8FF"} img={POS} title={t("erp.pos")} />
              <Card color={"#E0E8FF"} img={SMS} title={t("erp.sms")} />
              <Card color={"#E0E8FF"} img={Warehouse} title={t("erp.warehouse")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Erp;
