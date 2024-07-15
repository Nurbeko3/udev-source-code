import "./App.css";

import { useTranslation } from "react-i18next";

import Development from "./sections/Development";
import OurService from "./sections/OurService";
import Team from "./sections/Team";
import Erp from "./sections/Erp";
import UI from "./sections/UI";
import Optimization from "./sections/Optimization";
import Consulting from "./sections/Consulting";
import Tools from "./sections/Tools";
import OurClients from "./sections/OurClients";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero";
import Footer from "./components/Footer/Footer";
import Delever from "./sections/Delever";
import SmsUz from "./sections/SmsUz";
import GoodZone from "./sections/GoodZone";
import Iman from "./sections/Iman";
import HowWeWork from "./sections/HowWeWork";
import ContactUs from "./sections/ContactUs";
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <Hero />
      <OurService />
      <Team />
      <Development />
      <Erp />
      <UI />
      <Optimization />
      <Consulting />
      <Tools />
      <OurClients />
      <Delever />
      <SmsUz />
      <GoodZone />
      <Iman />
      <HowWeWork />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
