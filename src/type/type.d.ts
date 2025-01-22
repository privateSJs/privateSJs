import { React } from "react";
import { ReactNode } from "react";

declare interface LayoutProps {
  children: ReactNode;
}

declare interface SideBarProps {
  isOpen?: boolean;
  items: {
    label: string;
    link: string;
    icon: React.ReactNode;
  }[];
  socialItems: {
    link: string;
    icon: React.ReactNode;
  }[];
  imgSrc: React.ReactNode;
  classNameImage?: string;
  classNameItems?: string;
  classNameSocialItems?: string;
  hoverItems?: string;
  classNameSidebar?: string;
}
