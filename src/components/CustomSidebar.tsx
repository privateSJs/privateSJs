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
  classNameSidebar = "flex gap-10 w-full flex-row bg-[#000000] items-center justify-center text-xl text-white p-6 border-b-2 border-white border-opacity-20 mb-2",
  hoverItems = "hover:bg-white hover:text-black hover:border-10 hover:border-black hover:ring-2 hover:ring-white hover:ring-offset-10 transition-all duration-300 hover:rounded-md",
  classNameImage = "flex justify-center rounded-full",
  classNameItems = "flex flex-1 items-center justify-between text-xl space-x-2",
  classNameSocialItems = "flex flex-row justify-between items-center space-x-10 mb-2 border-b-2 border-white border-opacity-20 mb-2",
}: SideBarProps) => {
    const pathname = usePathname();

  return (
    <div className={classNameSidebar}>
      <Image src={imgSrc} className={classNameImage} alt="Jarek" />
        <div>
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
            <div className="flex space-x-10">
                {items.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <div className={`${classNameItems} ${hoverItems} ${
                            pathname === item.link ? 'border-b-2 border-blue-300' : ''
                        }`}>
                            {item.icon}
                            <span className="hidden md:inline">{item.label}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CustomSidebar;
