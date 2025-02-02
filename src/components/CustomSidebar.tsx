"use client";
import { SideBarProps } from "../type/type";
import Image from "next/image";
import Link from "next/link";

const CustomSidebar = ({
  isOpen,
  items,
  socialItems,
  imgSrc,
  classNameSidebar = "flex flex-col h-full w-[200px] bg-[#000000] items-start justify-center text-xl text-white p-6 ring-2 ring-white ring-opacity-20",
  hoverItems = "hover:bg-white hover:text-black hover:border-10 hover:border-black hover:ring-2 hover:ring-white hover:ring-offset-10 transition-all duration-300 hover:rounded-md",
  classNameImage = "flex justify-center rounded-full mb-20",
  classNameItems = "flex items-center text-xl p-2 space-x-2 mt-2",
  classNameSocialItems = "flex flex-row justify-between items-center space-x-10 mb-2",
}: SideBarProps) => {
  return (
    <div className={classNameSidebar}>
      <Image src={imgSrc} className={classNameImage} alt="Jarek" />
      <div className={classNameSocialItems}>
        {socialItems.map((item, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className={`${classNameSocialItems} ${hoverItems}`}
          >
            {item.icon}
            {isOpen}
          </a>
        ))}
      </div>
      <div className="border-[#767676] border-t w-full "></div>
      <div>
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className={`${classNameItems} ${hoverItems}`}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomSidebar;
