'use client'
import React from "react";
import ParticlesBackground from "@/components/BackgroundParticles";
import GetHomePageData from "@/components/HomePageData";
import CustomButton from "@/components/CustomButton";

const Page = () => {
    const { bodyPage } = GetHomePageData();
  return (
      <div className="space-y-4">
          <ParticlesBackground/>
          <div className=" absolute top-1/2 left-[200px] justify-center items-center ml-20">
              <h1 className=" flex flex-col text-6xl font-bold text-left text-white mb-2 ml-3 ">
                  <span>{bodyPage.welcome}</span>
                  <span>{bodyPage.introduce}
                    <span className="text-blue-300">{bodyPage.name}</span>
                  </span>
                  <span>{bodyPage.proffesion}</span>

              </h1>
              <p className="flex text-lg text-md text-center text-gray-500 mt-10 ml-3 italic">
                  ~ {bodyPage.peptalk} ~
              </p>
              <CustomButton title={bodyPage.button} className='flex flex-1 justify-center items-center mt-10 mb-2 ml-3 font-bold text-2xl hover:opacity-50 bg-blue-300 text-white px-4 rounded-[15px] h-[80px] '/>
          </div>
      </div>
  );
};

export default Page;
