'use client'
import React from "react";
import { useForm} from "@formspree/react";
import CustomInput from "@/components/CustiomInput";
import CustomTextarea from "@/components/CustomTextarea";
import CustomButton from "@/components/CustomButton";
import GetContactPageData from "@/components/ContactPageData";
import Link from "next/link";

const ContactForm = () => {
    const { bodyPage } = GetContactPageData();

    const [state, setState] = useForm('xovjwope')
    if (state.succeeded) {
        return (
            <p>Thanks for joining!</p>
        );
    }
    return (
        <div className='flex flex-col ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px]'>
            <div className='flex flex-col top-1/4 bg-blue-300 h-full w-full pr-10 pl-10 pt-10 pb-10 border-4 border-white text-left'>
                <span className="text-4xl font-bold">{bodyPage.title}</span>
                <span className="text-lg font-bold mt-2 mb-5 text-left">{bodyPage.introduce}</span>
                <span>{bodyPage.description}</span>
            </div>
            <div className='flex flex-row '>
                <div className="flex justify-center items-center h-full w-full bg-white  pt-4 pb-4  pl-4 pr-4 border-black border-opacity-20">
                    <li className="flex flex-col space-y-4 w-full">
                        <CustomInput type='text' label={bodyPage.fullname} placeholder={bodyPage.fullnamePlaceholder}/>
                        <CustomInput type='email' label={bodyPage.email} placeholder={bodyPage.emailPlaceholder}/>
                        <CustomInput type='tel' label={bodyPage.phoneNo} placeholder={bodyPage.phoneNoPlaceholder}/>
                        <CustomTextarea label={bodyPage.message} placeholder={bodyPage.messagePlaceholder}/>
                        <div className="flex flex-1 space-x-2 items-center text-justify justify-start">
                            <CustomInput
                                className="h-8 w-8  border-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
                                type="checkbox"
                                label=""
                            />
                            <span className="flex flex-row text-black">
                                {bodyPage.policy1}
                            </span>
                            <Link href="/policy" className="text-red-500 hover:underline">
                                {bodyPage.policy3}
                            </Link>
                            <span className="flex flex-row text-black">
                                {bodyPage.policy2}
                            </span>
                        </div>
                    </li>
                </div>
            </div>
            <div className="flex flex-1 w-full h-full">
                <CustomButton title={bodyPage.buttonSubmit}/>
            </div>
        </div>
    );
}

export default ContactForm;
