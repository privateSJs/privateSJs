import { React } from "react";
import { ReactNode, ButtonHTMLAttributes } from "react";

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

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  image?: string;
  altImage?: string;
  staticImage?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className: string;
}