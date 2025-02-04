'use client'
import {TextAreaProps} from "@/type/type";
import Image from "next/image";

const CustomTextarea = ({
                         label = "Message",
                         icon,
                         labelStyle = 'text-black',
                         containerStyle,
                         inputStyle = 'text-black px-2 py-2 border border-opacity-75 border-black rounded-md h-full w-full',
                         iconStyle,
                         ...props
                     }: TextAreaProps) => {
    return (
        <div className={containerStyle}>
            {label && <span className={labelStyle}>{label}</span>}
            <div>
                {icon && <Image src={icon} alt="Field Icon" className={iconStyle}/>}
                <textarea rows={6} className={inputStyle}
                          {...props}
                />
            </div>
        </div>
    )
};

export default CustomTextarea;