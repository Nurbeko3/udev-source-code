import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/Header/Logo.png";
import icon from "../../assets/images/Header/arrow-bottom.png";
import portfolio1 from "../../assets/images/Header/portfolio-1.png";
import portfolio2 from "../../assets/images/Header/portfolio-2.png";
import portfolio3 from "../../assets/images/Header/portfolio-3.png";
import portfolio4 from "../../assets/images/Header/portfolio-4.png";
import service1 from "../../assets/images/Header/service-1.png";
import service2 from "../../assets/images/Header/service-2.png";
import service3 from "../../assets/images/Header/service-3.png";
import service4 from "../../assets/images/Header/service-4.png";
import service5 from "../../assets/images/Header/service-5.png";
import Ru from "../../assets/images/Header/Ru.png";
import Eng from "../../assets/images/Header/Eng.png";

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#contact") {
      const contactUsSection = document.getElementById("contact-us");
      if (contactUsSection) {
        contactUsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const openNav = () => {
    const headerMobile = document.querySelector(".header-mobile-wrapper");
    headerMobile.classList.toggle("open");
  };
  const clouseNav = () => {
    const headerMobile = document.querySelector(".header-mobile-wrapper");
    headerMobile.classList.remove("open");
  };

  const activeLink =
    "text-[14px] font-bold leading-[20px] text-[--dark] pt-[10px] pb-[10px] border-b-2 border-[--primary] header__link flex items-center";
  const normalLink =
    "text-[14px] font-bold leading-[20px] text-[--dark] pt-[10px] pb-[10px] border-b-2 border-transparent header__link flex items-center";

  return (
    <header className="site-header h-[64px] flex items-center py-[20px] lg:h-[72px] bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <NavLink to={"/"} className={"w-24 block header__logo"}>
            <img src={logo} className="w-full" alt="header-logo" />
          </NavLink>
          <ul className="header__list items-center hidden lg:flex gap-x-[15px] lg:gap-x-[32px]">
            <li className="header__item hidden lg:flex">
              <NavLink
                to="/#our-service"
                className={({ isActive }) =>
                  isActive ? normalLink : activeLink
                }
              >
                {t("services")}
              </NavLink>
            </li>
            <li className="header__item hidden lg:flex">
              <NavLink
                to={"#!"}
                className={({ isActive }) =>
                  isActive ? normalLink : activeLink
                }
              >
                {t("team")}
              </NavLink>
            </li>
            <li className="header__item hidden lg:flex relative">
              <NavLink to={"#!"} className={normalLink}>
                {t("direction")}
                <div className="header-item__icon ml-[2px]">
                  <img
                    src={icon}
                    alt="header-item__icon"
                    width={13}
                    height={12}
                  />
                </div>
              </NavLink>
              <ul className="drop-down absolute top-[70%] left-[50%] translate-x-[-50%] min-w-[300px] min-h-[434px] bg-[#fff] rounded-lg">
                <li>
                  <p className="drop-down-item__title pr-6 pl-6 mb-5 text-[12px] leading-[18px] font-bold tracking-[1px]">
                    {t("direction")}
                  </p>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={service1}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <NavLink
                      to={"/development-section"}
                      className="drop-down-item__text text-[13px] leading-[19px] text-[#000]"
                      n
                    >
                      Разработка мобильных приложений
                    </NavLink>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={service2}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      Разработка и внедрение ERP систем
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={service3}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      UI / UX дизайн
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={service4}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      IT консалтинг
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={service5}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      Оптимизация <br /> инфраструктуры
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="header__item hidden lg:flex">
              <NavLink
                to={"#!"}
                className={({ isActive }) =>
                  isActive ? normalLink : activeLink
                }
              >
                {t("tools")}
              </NavLink>
            </li>
            <li className="header__item hidden lg:flex">
              <NavLink
                to={"#!"}
                className={({ isActive }) =>
                  isActive ? normalLink : activeLink
                }
              >
                {t("clients")}
              </NavLink>
            </li>
            <li className="header__item hidden lg:flex relative">
              <NavLink to={"#!"} className={normalLink}>
                {t("portfolio")}
                <div className="header-item__icon ml-[2px]">
                  <img src={icon} alt="" width={13} height={12} />
                </div>
              </NavLink>
              <ul className="drop-down absolute top-[70%] left-[50%] translate-x-[-50%] min-w-[300px] bg-[#fff] rounded-lg">
                <li>
                  <p className="drop-down-item__title pr-6 pl-6 mb-5 text-[12px] leading-[18px] font-bold tracking-[1px]">
                    {t("portfolio")}
                  </p>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={portfolio1}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      Delever
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={portfolio2}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      Sms.uz
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items=center gap-x-6"
                  >
                    <img
                      src={portfolio3}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text=[13px] leading=[19px] text-[#000]">
                      Goodzone
                    </span>
                  </NavLink>
                </li>
                <li className="drop-down__item block mb-2 relative">
                  <NavLink
                    to={"#!"}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[34px] flex items-center gap-x-6"
                  >
                    <img
                      src={portfolio4}
                      alt="drop-down-item__img"
                      width={48}
                      height={48}
                    />
                    <span className="drop-down-item__text text-[13px] leading-[19px] text-[#000]">
                      Iman
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="header__item relative">
              <NavLink to={"#!"} className={normalLink}>
                {t("Til")}
                <div className="header-item__icon ml-[2px]">
                  <img src={icon} alt="" width={13} height={12} />
                </div>
              </NavLink>
              <ul className="drop-down absolute top-[70%] pt-4 pb-4 left-[50%] translate-x-[-50%] min-w-[120px] h-[133px] bg-[#fff] rounded-lg">
                <li className="drop-down__item block mb-[.725rem] relative">
                  <button
                    onClick={() => changeLanguage("ru")}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[11px] flex items-center gap-x-4"
                  >
                    <img
                      src={Ru}
                      alt="drop-down-item__img"
                      width={28}
                      height={28}
                    />
                    <span className="drop-down-item__text text-[16px] font-semibold leading-[19px] text-[#000]">
                      Рус
                    </span>
                  </button>
                </li>
                <li className="drop-down__item block mb-[.725rem] relative">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[11px] flex items-center gap-x-4"
                  >
                    <img
                      src={Eng}
                      alt="drop-down-item__img"
                      width={28}
                      height={28}
                    />
                    <span className="drop-down-item__text text-[16px] font-semibold leading-[19px] text-[#000]">
                      Eng
                    </span>
                  </button>
                </li>
              </ul>
            </li>
            <li className="header__item hidden lg:flex">
              <NavLink
                to={"/#contact"}
                className="header__btn pt-[10px] pb-[10px] pr-4 pl-4 bg-[--primary] flex justify-center items-center w-[112px] h-[40px] rounded-lg text-[14px] leading-[20px] font-bold text-[#fff] ({ isActive }) => isActive ? normalLink : activeLink"
              >
                {t("contact")}
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-x-[30px]">
            <li className="header__item relative block lg:hidden">
              <NavLink to={"#!"} className={normalLink}>
                {t("Til")}
                <div className="header-item__icon ml-[2px]">
                  <img src={icon} alt="" width={13} height={12} />
                </div>
              </NavLink>
              <ul className="drop-down absolute top-[70%] pt-4 pb-4 left-[50%] translate-x-[-50%] min-w-[120px] h-[133px] bg-[#fff] rounded-lg">
                <li className="drop-down__item block mb-[.725rem] relative">
                  <button
                    onClick={() => changeLanguage("ru")}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[11px] flex items-center gap-x-4"
                  >
                    <img
                      src={Ru}
                      alt="drop-down-item__img"
                      width={28}
                      height={28}
                    />
                    <span className="drop-down-item__text text-[16px] font-semibold leading-[19px] text-[#000]">
                      Рус
                    </span>
                  </button>
                </li>
                <li className="drop-down__item block mb-[.725rem] relative">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="drop-down-item__content pt-2 pr-[11px] pb-2 pl-[11px] flex items-center gap-x-4"
                  >
                    <img
                      src={Eng}
                      alt="drop-down-item__img"
                      width={28}
                      height={28}
                    />
                    <span className="drop-down-item__text text-[16px] font-semibold leading-[19px] text-[#000]">
                      Eng
                    </span>
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                className="w-[25px] h-[17px] flex flex-col justify-between lg:hidden"
                onClick={openNav}
              >
                <span className="w-full h-[3px] bg-[--primary]"></span>
                <span className="w-full h-[3px] bg-[--primary]"></span>
                <span className="w-full h-[3px] bg-[--primary]"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-mobile-wrapper hidden flex-col">
        <ul className="h-[64px] flex items-center justify-between">
          <li>
            <NavLink to={"/"} className={"w-24 block header__logo"}>
              <img src={logo} className="w-full" alt="header-logo" />
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className="w-[39px] h-[29px] fill-[--primary]"
              onClick={clouseNav}
            >
              <svg
                class="MuiSvgIcon-root w-[27px] h-[27px]"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </li>
        </ul>
        <ul className="h-[40%] flex justify-center flex-col items-center">
          <li>
            <NavLink
              to={"#!"}
              className={
                "text-[32px] font-extrabold leading-[54px] text-[--dark]"
              }
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"#!"}
              className={
                "text-[32px] font-extrabold leading-[54px] text-[--dark]"
              }
            >
              Клиенты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"#!"}
              className={
                "text-[32px] font-extrabold leading-[54px] text-[--dark]"
              }
            >
              Команда
            </NavLink>
          </li>
        </ul>
        <ul className="h-[20%]">
          <li>
            <NavLink
              to={"/#contact"}
              className="header__btn pt-[10px] pb-[10px] pr-4 pl-4 bg-[--primary] flex justify-center items-center w-full h-[56px] rounded-lg text-[20px] leading-[30px] font-bold text-[#fff]"
            >
              {t("contact")}
            </NavLink>
          </li>
          <li className="flex items-center justify-center gap-x-[24px] mt-10 mb-10">
            <NavLink
              to={"#!"}
              className={
                "flex justify-center items-center w-10 h-10 rounded-[50%] bg-[--primary]"
              }
            >
              <svg
                class="MuiSvgIcon-root w-[27px] h-[27px] fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </NavLink>
            <NavLink
              to={"#!"}
              className={
                "flex justify-center items-center w-10 h-10 rounded-[50%] bg-[--primary]"
              }
            >
              <svg
                class="MuiSvgIcon-root w-[27px] h-[27px] fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </NavLink>
            <NavLink
              to={"#!"}
              className={
                "flex justify-center items-center w-10 h-10 rounded-[50%] bg-[--primary]"
              }
            >
              <svg
                class="MuiSvgIcon-root w-[27px] h-[27px] fill-white"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
