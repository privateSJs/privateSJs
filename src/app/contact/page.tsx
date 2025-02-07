'use client'
import React, {useRef, useState, FormEvent} from "react";
import CustomInput from "@/components/CustiomInput";
import CustomTextarea from "@/components/CustomTextarea";
import CustomButton from "@/components/CustomButton";
import GetContactPageData from "@/components/ContactPageData";
import Link from "next/link";
import emailjs from "@emailjs/browser";



const ContactForm = () => {
    const secretData = {
        serviceID: "service_479lgup",
        templateID:  "template_qx5gj5i",
        pbKey:  "xcfGKVgw3vupzCI3W",
    }

    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
        timestamp: ""
    });

    const [showAlert, setShowAlert] = useState(false);

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
    }

    const sendEmail = (email: FormEvent<HTMLFormElement>) => {
        email.preventDefault();

        if (!form.current) return;

        const currentTime = getCurrentTime();
        setFormData((prevData) => ({...prevData, timestamp: currentTime}));

        emailjs.
            sendForm(
                secretData.serviceID,
                secretData.templateID,
                form.current,
                secretData.pbKey,
        )
            .then(
                () => {
                    console.log("Successfully sent email form");
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                },
                (error) => {
                    console.log("Failed", error.text);
                }
            );
    };

    const handeInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const clearField = (field: string) => {
        setFormData((prevData) => ({ ...prevData, [field]: "" }));
    };

    const clearAllFields = () => {
        setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
            timestamp: "",
        });
    };


    const { bodyPage } = GetContactPageData();

    return (
        <div className='flex flex-col ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px]'>
            <div
                className='flex flex-col top-1/4 bg-white bg-opacity-20 text-white h-full w-full pr-10 pl-10 pt-10 pb-10 border-4 border-white text-left rounded-xl mb-2'>
                <span className="text-4xl font-bold">{bodyPage.title}</span>
                <span className="text-lg font-bold mt-2 mb-5 text-left">{bodyPage.introduce}</span>
                <span>{bodyPage.description}</span>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-row'>
                    <div
                        className="flex justify-center items-center h-full w-full bg-blue-300 rounded-xl pt-4 pb-4  pl-4 pr-4 border-4 border-white">
                        <li className="flex flex-col space-y-4 w-full">
                            <div>
                                <CustomInput type='text' name="user_name" label={bodyPage.fullname}
                                             placeholder={bodyPage.fullnamePlaceholder} onChange={handeInputChange} value={formData.user_name} required/>
                                <CustomButton type="button" title={bodyPage.btnClearField} onClick={() => clearField("user_name")} className="text-xs text-black underline italic hover:opacity-50 active:scale-90" />
                            </div>
                            <div>
                                <CustomInput type='email' name="user_email" label={bodyPage.email}
                                             placeholder={bodyPage.emailPlaceholder} onChange={handeInputChange} value={formData.user_email} required/>
                                <CustomButton type="button" title={bodyPage.btnClearField} onClick={() => clearField("user_email")}  className="text-xs text-black underline italic hover:opacity-50 active:scale-90" />
                            </div>
                            <div>
                                <CustomInput type='tel' name="user_phone" label={bodyPage.phoneNo}
                                             placeholder={bodyPage.phoneNoPlaceholder} onChange={handeInputChange} value={formData.user_phone}/>
                                <CustomButton type="button" title={bodyPage.btnClearField} onClick={() => clearField("user_phone")} className="text-xs text-black underline italic hover:opacity-50 active:scale-90" />
                            </div>
                            <div>
                                <CustomTextarea name="message" label={bodyPage.message}
                                                placeholder={bodyPage.messagePlaceholder} onChange={handeInputChange} value={formData.message} required/>
                                <CustomButton type="button" title={bodyPage.btnClearField} onClick={() => clearField("message")} className="text-xs text-black underline italic hover:opacity-50 active:scale-90" />
                            </div>
                            <div className="flex flex-1 space-x-2 items-center text-justify justify-start">
                                <CustomInput
                                    className="h-8 w-8  border-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
                                    type="checkbox"
                                    label=""
                                    onChange={handeInputChange}
                                    required
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
                {showAlert && (
                    <span className="bg-green-500 text-white rounded-[10px] px-2 py-2">
                        {bodyPage.successAlert}
                    </span>
                )}
                <div className="flex flex-1 w-full h-full">
                    <CustomButton type="submit" value="Send" title={bodyPage.buttonSubmit}/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
