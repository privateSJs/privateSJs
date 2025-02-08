"use client";
import React from "react";
import { ReactNode } from "react";
import CustomSidebar from "../components/CustomSidebar";
import {
  FaHome,
  FaUserAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { images } from "../constants";
import { icons } from "../constants";
import "./globals.css";
import CustomButton from "@/components/CustomButton";
import GetHomePageData from "@/components/HomePageData";
import { useTranslation } from "react-i18next";
import '../i18n/i18n.config';

const Layout = ({ children }: { children: ReactNode }) => {
  //const [isSidebarOpen, setSidebarOpen] = useState(false);

  //const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const { sidebar } = GetHomePageData();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    if (typeof changeLanguage === "function") {
      i18n.changeLanguage(lang)
    }else {
      console.error("changeLanguage is not available on i18n instance");
    }
  };

  const sidebarItems = [
    { label: sidebar.home, link: "/home", icon: <FaHome /> },
    { label: sidebar.aboutMe, link: "/about", icon: <FaUserAlt /> },
    { label: sidebar.contact, link: "/contact", icon: <FaEnvelope /> },
  ];

  const socialSidebarItems = [
    { link: "https://www.facebook.com/jareczek9917", icon: <FaFacebook /> },
    { link: "https://www.linkedin.com/in/privatejs/", icon: <FaLinkedin /> },
    { link: "https://github.com/privateSJs/privateSJs", icon: <FaGithub /> },
  ];

  return (
      <html lang={currentLanguage}>
      <head>
        <title>Perpetuum Mobile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, , user-scalable=yes" />
      </head>
      <body className="flex min-w-full min-h-full">
      <div className="fixed w-full z-10">
        <p className="fixed top-0 left-0 w-full">
          <CustomButton
              className={`w-8 h-8 mt-2 ml-2 hover:opacity-50 ${currentLanguage === "pl" ? "border-[3px] border-white" : ""} rounded-full`}
              onClick={() => changeLanguage("pl")}
              staticImage={icons.langPl}
              altImage="My button"
          />
          <CustomButton
              className={`w-8 h-8 mt-2 ml-2 hover:opacity-50 ${currentLanguage === "en" ? "border-[3px] border-white" : ""} rounded-full`}
              onClick={() => changeLanguage("en")}
              staticImage={icons.langEn}
              altImage="My button"
          />
        </p>
        <CustomSidebar
            imgSrc={images.profilev2}
            socialItems={socialSidebarItems}
            items={sidebarItems}
            isOpen={true}
        />
      </div>
      <main className="flex-1 mt-[250px]">{children}</main>
      </body>
      </html>
  );
};

export default Layout;
