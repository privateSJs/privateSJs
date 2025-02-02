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
    className,
}: ButtonProps) => {
    return (
        <button className={className} onClick={onClick}>
            {iconLeft && <span>{iconLeft}</span>} {/* Left side icon from text*/}
            {image && <img src={image} alt={altImage}/>}
            {staticImage && <Image src={staticImage} alt={altImage ? altImage : ""} />}
            {title && <span>{title}</span>}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
};

export default CustomButton;