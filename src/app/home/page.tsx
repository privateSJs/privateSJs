'use client'
import React from "react";
import ParticlesBackground from "@/components/BackgroundParticles";
import GetHomePageData from "@/components/HomePageData";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

const Page = () => {
    const { bodyPage } = GetHomePageData();
  return (
      <div className="space-y-4 min-h-full min-w-full h-screen w-screen">
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, , user-scalable=yes"/>
          <ParticlesBackground/>
          <div className=" absolute top-1/2 justify-center items-center ml-[20px] mr-[20px]">
              <h1 className=" flex flex-col text-4xl lg:text-6xl font-bold text-left text-white mb-2 ml-3 ">
                  <span>{bodyPage.welcome}</span>
                  <span>{bodyPage.introduce}
                      <span className="text-blue-300">{bodyPage.name}</span>
                  </span>
                  <span>{bodyPage.proffesion}</span>
              </h1>
              <p className="flex text-1xl lg:text-lg text-md text-center text-gray-500 mt-10 ml-3 italic">
                  ~ {bodyPage.peptalk} ~
              </p>
              <Link href="/contact">
                  <CustomButton title={bodyPage.button}/>
              </Link>
          </div>
      </div>
  );
};

export default Page;
