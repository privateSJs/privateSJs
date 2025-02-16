'use client'
import React from "react";
import ParticlesBackground from "@/components/BackgroundParticles";
import GetHomePageData from "@/components/HomePageData";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import {motion} from "framer-motion";

const Page = () => {
    const { bodyPage } = GetHomePageData();
  return (
          <div className="flex flex-1 space-y-4 max-h-full max-w-full">
              <ParticlesBackground/>
              <motion.div className=" absolute top-1/2 justify-center items-center ml-[20px] mr-[20px]"
                          initial={{opacity: 0}} // Zaczynamy od 0
                          animate={{opacity: 1}} // Przejście do pełnej widoczności
                          exit={{opacity: 0}} // Wyblaknięcie, kiedy strona znika
                          transition={{duration: 0.5}}>
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
              </motion.div>
          </div>
  );
};

export default Page;
