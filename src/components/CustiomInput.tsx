'use client'
import {InputProps} from "@/type/type";
import Image from "next/image";

const CustomInput = ({
    label = 'Custom Input',
    icon,
    secureTextEntry = false,
    labelStyle = 'text-black',
    containerStyle = 'flex flex-1 flex-col w-full h-full',
    inputStyle = 'text-black px-2 py-2 border border-opacity-75 border-black rounded-md h-full max-w-screen w-full md:w-1/2 lg:w-1/3',
    iconStyle,
    ...props
}: InputProps) => {
    return (
        <div className={containerStyle}>
            {label && <span className={labelStyle}>{label}</span>}
            <div>
                {icon && <Image src={icon} alt="Field Icon" className={iconStyle}/>}
                <input type={secureTextEntry ? "password" : "text"}
                       className={inputStyle}
                       {...props}
                />
            </div>
        </div>
    )
};

export default CustomInput;