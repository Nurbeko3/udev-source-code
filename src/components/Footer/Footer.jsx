import React from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/Header/Logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer mt-auto pt-12 bg-[--background]">
      <div className="container mx-auto p-4 md:p-8">
        <div className="footer-top flex flex-col items-center">
          <NavLink to={"#!"} className={"mb-11"}>
            <img src={logo} alt="header-logo" width={106} height={35} />
          </NavLink>
          <ul className="footer__list grid grid-cols-1 md:grid-cols-3 gap-8 mb-[32px] w-full">
            {[
              {
                title: t('AboutUs'),
                links: [
                  t('Services'),
                  t('Team'),
                  t('Tools'),
                  t('Clients')
                ]
              },
              {
                title: t('Services'),
                links: [
                  t('MobileDevelopment'),
                  t('ERPDevelopment'),
                  t('UIDesign'),
                  t('ITConsulting'),
                  t('InfrastructureOptimization')
                ]
              },
              {
                title: t('Portfolio'),
                links: [
                  t('Delever'),
                  t('Smsuz'),
                  t('Goodzone'),
                  t('Iman')
                ]
              }
            ].map((section, index) => (
              <li key={index} className="footer__item flex flex-col items-center md:items-start">
                <p className="mb-[18px] font-bold text-[1em] text-[--text-color]">
                  {section.title}
                </p>
                {section.links.map((link, linkIndex) => (
                  <NavLink
                    key={linkIndex}
                    to={"#!"}
                    className={"text-[18px] leading-[32px] text-[--primary]"}
                  >
                    {link}
                  </NavLink>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-[25px] pb-[25px] border-t-[1px] border-[--border-color]">
          <p className="text-[14px] leading-[24px] text-[--primary] mb-[26px] md:mb-0">
            {t('AllRightsReserved')}
          </p>
          <ul className="footer__social-icons flex items-center  gap-x-4">
            <li>
              <NavLink
                to={"#!"}
                className={
                  "p-[7px] inline-block w-[38px] h-[38px] rounded-[50%] bg-[--icon-bg]"
                }
              >
                <img src="" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#!"}
                className={
                  "p-[7px] inline-block w-[38px] h-[38px] rounded-[50%] bg-[--icon-bg]"
                }
              >
                <img src="" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#!"}
                className={
                  "p-[7px] inline-block w-[38px] h-[38px] rounded-[50%] bg-[--icon-bg]"
                }
              >
                <img src="" alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
