'use client'
import React from "react";
import Image from "next/image";
import {images} from "../../constants";
import { useState, useEffect } from "react";
import GetAboutMePageData from "../../components/AboutMePageData";
import { motion } from "framer-motion";


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

      <motion.div
          className="relative ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px] justify-center items-center bg-white shadow-[30px_30px_30px_rgba(255,255,255,0.2)] border-black border-opacity-20 text-black font-bold opacity-95 scale-95 lg:scale-100 max-w-fit max-h-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes"/>
          <div
              className="relative flex flex-col lg:flex-row w-full h-full justify-center items-center space-y-4 lg:space-y-0">
              <div className="relative flex flex-col py-2 px-5 w-full text-justify items-center justify-center">
                  <div className="relative w-[400px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[600px]">
                      {imgs.map((img, i) => (
                          <Image key={i} src={img}
                                 alt={`Slideshow Image ${i}`}
                                 className={`absolute max-w-[400px] md:max-w-[600px] md:h-[400px] h-[300px] lg:max-w-[800px] lg:h-[600px] mb-4 transform object-cover duration-1000 ease-in-out transition-opacity rounded-xl ${
                                     i === index ? `opacity-${fade ? '100' : '0'}` : "opacity-0"
                                 }`}
                          />
                      ))}
                  </div>
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
                      <div key={index} className="py-4 border-b-black border-b-2 border-opacity-20">
                          <h1 className={`${index === 0 ? "text-[40px] md:text-[50px] lg:text-[60px]" : "text-[20px] lg:text-[40px]"} font-bold text-black`}>
                              {section.title}
                          </h1>
                          {[section.description1, section.description2, section.description3, section.description4].filter(Boolean).map((description, i) => (
                              <p key={i}
                                 className='mb-3 mt-1 text-[15px] md:text-[20px] lg:text-lg opacity-60'>{description}</p>
                          ))}
                      </div>

                  ))}
              </div>
          </div>
      </motion.div>

  );
};

export default AboutMe;
