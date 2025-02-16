import { React } from "react";
import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";

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
  classNameLeftChildren?: string;
  classNameRightChildren?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  image?: string;
  altImage?: string;
  staticImage?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
}

declare interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
}