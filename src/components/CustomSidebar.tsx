"use client";
import { usePathname} from "next/navigation";
import { SideBarProps } from "../type/type";
import Image from "next/image";
import Link from "next/link";

const CustomSidebar = ({
  isOpen,
  items,
  socialItems,
  imgSrc,
  classNameSidebar = "flex items-center justify-center bg-black border-b-2 py-2 border-opacity-20 border-white",
  hoverItems = "hover:bg-white hover:text-black hover:border-10 hover:border-black hover:ring-2 hover:ring-white hover:ring-offset-10 transition-all duration-300 hover:rounded-md",
  classNameImage = "w-[150px] h-[100px] lg:w-[250px] lg:h-[170px] rounded-[10px]",
  classNameItems = "flex items-center text-[15px] lg:text-xl space-x-4",
  classNameSocialItems = "flex flex-row justify-between lg:space-x-10",
    classNameLeftChildren,
    classNameRightChildren,
    leftChildren,
    rightChildren,
}: SideBarProps) => {
    const pathname = usePathname();

  return (
      <div className={classNameSidebar}>
          {leftChildren && <div className={classNameLeftChildren}>{leftChildren}</div>}
          <div className="flex flex-col space-y-2 mb-2 ml-10 px-2">
              <div className="flex">
                  <Image src={imgSrc} className={classNameImage} alt="Jarek"/>
              </div>
              <div className={classNameSocialItems}>
                  {socialItems.map((item, index) => (
                      <a
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.link}
                          className={`${hoverItems}`}
                      >
                          {item.icon}
                          {isOpen}
                      </a>
                  ))}
              </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 px-2">
              {items.map((item, index) => (
                  <Link key={index} href={item.link}>
                      <div className={`${classNameItems} ${hoverItems} ${
                          pathname === item.link ? 'border-b-2 border-blue-300' : ''
                      }`}>
                          <span className="flex items-center gap-2">{item.icon}{item.label}</span>
                      </div>
                  </Link>
              ))}
          </div>
          {rightChildren && <div className={classNameRightChildren}>{rightChildren}</div>}
      </div>
  );
};

export default CustomSidebar;
