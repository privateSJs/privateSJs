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
import "./globals.css";

const Layout = ({ children }: { children: ReactNode }) => {
  //const [isSidebarOpen, setSidebarOpen] = useState(false);

  //const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const sidebarItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "About Me", link: "/about", icon: <FaUserAlt /> },
    { label: "Contact", link: "/contact", icon: <FaEnvelope /> },
  ];

  const socialSidebarItems = [
    { link: "https://www.facebook.com/jareczek9917", icon: <FaFacebook /> },
    { link: "https://www.linkedin.com/in/privatejs/", icon: <FaLinkedin /> },
    { link: "https://github.com/privateSJs/privateSJs", icon: <FaGithub /> },
  ];

  return (
    <html lang="en">
      <body className="flex flex-1">
        <div>
          <CustomSidebar
            imgSrc={images.profile}
            socialItems={socialSidebarItems}
            items={sidebarItems}
            isOpen={true}
          />
        </div>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
