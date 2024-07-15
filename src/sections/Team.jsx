import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import TeamImg from "../assets/images/Team-image.svg";

const Team = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // 2 seconds
    const incrementTime = (duration / end) * 2;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F4F7FF] pb-[50px]">
      <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-[450px] mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-8 text-[#1B5BF7] pb-[40px] md:pb-[70px] pt-[30px] md:pt-[60px] text-[30px] md:text-[60px]">
            {t("team")}
          </h2>
          <p className="pb-[20px] text-base md:text-[20px]">
            {t("teamDescription")}
          </p>
          <h3 className="text-[#1B5BF7] text-[50px] md:text-[100px] font-bold">
            {count}+
          </h3>
          <p className="text-lg md:text-[30px] text-gray-700 font-bold pb-[20px] md:pb-[40px]">
            {t("dedicatedTeam")}
          </p>
        </div>
        <img
          src={TeamImg}
          alt="Team img"
          className="w-full md:w-auto h-auto max-w-xs md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Team;
