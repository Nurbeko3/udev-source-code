import React from "react";
import { useTranslation } from "react-i18next";

import Contact from "../assets/images/HowWeWork/Contact.png";
import Analysis from "../assets/images/HowWeWork/Analysis.png";
import Offer from "../assets/images/HowWeWork/Offer.png";
import Team from "../assets/images/HowWeWork/Team.png";
import Start from "../assets/images/HowWeWork/Start.png";

const HowWeWork = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] pb-[100px]">
      <div className="container mx-auto px-4">
        <div className="bg-background text-foreground p-8 ">
          <h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 md:mb-8 text-[#1B5BF7] pb-[20px] sm:pb-[30px] md:pb-[40px]"
            style={{ lineHeight: "1.2" }}
          >
            {t("HowWeWorkTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                img: Contact,
                title: t("Contact"),
                description: t("ContactDescription"),
              },
              {
                img: Analysis,
                title: t("Analysis"),
                description: t("AnalysisDescription"),
              },
              {
                img: Offer,
                title: t("Offer"),
                description: t("OfferDescription"),
              },
              {
                img: Team,
                title: t("Team"),
                description: t("TeamDescription"),
              },
              {
                img: Start,
                title: t("Start"),
                description: t("StartDescription"),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-secondary rounded-full p-4 mb-4">
                  <img alt={`${item.title}-icon`} src={item.img} />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
