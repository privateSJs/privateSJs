'use client'
import React, { useEffect } from "react";
import Link from "next/link";

const WelcomePage = () => {
    useEffect(() => {
        window.location.href = "/privateSJs/home";
    }, []);
  return (
      <div className="flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-4xl font-bold text-white">
              Przekierowywanie...
          </h1>
          <Link href='/home' className="text-3xl font-bold text-white hover:text-gray-100 focus:outline-none">
              <p>Kliknij tu jeśli nie nastąpiło automatyczne przekierowanie...</p>
          </Link>
      </div>
  );
};

export default WelcomePage;
