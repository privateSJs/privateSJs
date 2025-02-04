'use client'

import { ButtonProps } from "../type/type";
import Image from "next/image";

const CustomButton = ({
    onClick,
    title,
    image,
    staticImage,
    altImage,
    iconLeft,
    iconRight,
    className = 'flex flex-1 justify-center items-center mt-10 mb-2 ml-3 font-bold text-2xl hover:opacity-50 bg-blue-300 text-white px-4 rounded-[15px] h-[80px] active:bg-blue-400 active:text-white active:scale-95 ',
    ...props
}: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} {...props}>
            {iconLeft && <span>{iconLeft}</span>} {/* Left side icon from text*/}
            {image && <img src={image} alt={altImage}/>}
            {staticImage && <Image src={staticImage} alt={altImage ? altImage : ""} />}
            {title && <span>{title}</span>}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
};

export default CustomButton;