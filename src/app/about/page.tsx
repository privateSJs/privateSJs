'use client'
import React from "react";
import Image from "next/image";
import {images} from "../../constants";
import { useState, useEffect } from "react";
import GetAboutMePageData from "../../components/AboutMePageData";


const AboutMe = () => {
    const { bodyPage } = GetAboutMePageData();

    const imgs = [
        images.flsPic,
        images.miloPic,
        images.love,
        images.graduate
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (

      <div
          className="relative ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px] justify-center items-center bg-white border-[3px] border-black border-opacity-20 text-black font-bold opacity-95 scale-95 lg:scale-100">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes"/>
          <div className="flex flex-row w-full h-full justify-center items-center">
              <div className="relative w-[1000px] h-[800px] hidden lg:block ml-[40px]">
                  {imgs.map((img, i) => (
                      <Image key={i} src={img}
                             alt={`Slideshow Image ${i}`}
                             className={`w-[600px] h-[800px] absolute object-cover duration-1000 ease-in-out ${
                                 i === index ? `opacity-${fade ? '100' : '0'}` : "opacity-0"
                             }`}
                      />
                  ))}
              </div>
              <div className="flex flex-col divide-y divide-black divide-opacity-20 py-2 px-5 w-full text-justify">
                  {[
                      {title: bodyPage.title, description1: bodyPage.description},
                      {
                          title: bodyPage.educationTitle,
                          description1: bodyPage.education1,
                          description2: bodyPage.education2,
                          description3: bodyPage.education3,
                      },
                      {
                          title: bodyPage.hobbyTitle,
                          description1: bodyPage.hobby1,
                          description2: bodyPage.hobby2,
                          description3: bodyPage.hobby3,
                          description4: bodyPage.hobby4,
                      },
                  ].map((section, index) => (
                      <div key={index} className="py-4">
                          <h1 className={`${index === 0 ? "text-[60px]" : "text-[40px]"} font-bold text-black`}>
                              {section.title}
                          </h1>
                          {[section.description1, section.description2, section.description3, section.description4].filter(Boolean).map((description, i) => (
                              <p key={i} className='mb-3 mt-1 text-lg opacity-60'>{description}</p>
                          ))}
                      </div>

                  ))}
              </div>
          </div>
      </div>

  );
};

export default AboutMe;
