import React, { useState } from "react";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

import Location from "../assets/images/ContactUs/Location.png";
import Tel from "../assets/images/ContactUs/Tel.png";
import Email from "../assets/images/ContactUs/Email.png";
import Telegram from "../assets/images/ContactUs/Telegram.png";

export default function ContactUs() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;
    if (!name.trim()) {
      tempErrors.name = t("nameIsRequired");
      isValid = false;
    }
    if (!email) {
      tempErrors.email = t("emailIsRequired");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = t("invalidEmail");
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { name, email, message });
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
    }
  };

  return (
    <section id="contact-us" className="pt-[60px] pb-[100px]">
      <div className="container">
        <h2
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 md:mb-8 text-[#1B5BF7] pb-[20px] sm:pb-[30px] md:pb-[40px]"
          style={{ lineHeight: "1.2" }}
        >
          {t("contactUs")} {/* Contact Us yoki Свяжитесь с нами */}
        </h2>
        <div className="bg-card p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {t("leaveMessage")}{" "}
                {/* Leave us a message yoki Оставьте нам сообщение */}
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full p-3 border ${
                      errors.name ? "border-red-500" : "border-input"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 border ${
                      errors.email ? "border-red-500" : "border-input"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <textarea
                  placeholder={t("descriptionPlaceholder")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#1B5BF7] text-white w-full p-3 rounded-md hover:bg-primary/80"
                >
                  {t("sendButton")} {/* Send yoki Отправить */}
                </button>
              </form>
            </div>
            <div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center">
                  <img alt="location-pin" src={Location} className="mr-2" />
                  <a
                    className="text-[#1B5BF7] font-medium"
                    target="blank"
                    href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                  >
                    {t("locationAddress")} {/* Location address yoki Адрес */}
                  </a>
                </li>
                <li className="flex items-center">
                  <img alt="phone" src={Tel} className="mr-2" />
                  <a
                    className="text-[#1B5BF7] font-medium"
                    href="tel:+998336600999"
                  >
                    {t("phoneNumber")} {/* Phone number yoki Номер телефона */}
                  </a>
                </li>
                <li className="flex items-center">
                  <img alt="email" src={Email} className="mr-2" />
                  <a
                    className="text-[#1B5BF7] font-medium"
                    href={`mailto:${t("emailAddress")}`}
                  >
                    {t("emailAddress")}
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    alt="telegram"
                    src={Telegram}
                    className="mr-2"
                    width={24}
                    height={24}
                  />
                  <a
                    target="blank"
                    href="https://t.me/azizbekbakhodirov"
                    className="font-medium text-[#1B5BF7] hover:underline"
                  >
                    {t("telegramLink")}{" "}
                    {/* Telegram link yoki Ссылка на Telegram */}
                  </a>
                </li>
              </ul>

              <div className="mt-4">
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen="true"
                  className="w-full rounded-md border border-input"
                ></iframe>
              </div>
            </div>
          </div>
          <Modal
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <h2>{t("completedMessage")}</h2> {/* Completed yoki Завершено */}
          </Modal>
        </div>
      </div>
    </section>
  );
}
