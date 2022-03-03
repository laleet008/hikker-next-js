import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import Link from "next/link";
import Navbar from "../pages/Navbar";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <Navbar className="absolute" />

        <hr className="fixed  horizontal_line  border-gray-400 w-full" />

        <div className="flex">
          <div className="relative text-[280px] flex ml-60 mt-40 text-gray-600 font-medium">
            HIKKER
          </div>
          <div className="flex flex-col absolute mt-[350px]  ml-16 items-center">
            <h1 className="text-[50px] font-sans text-white text-bold">
              BE PREPARED FOR THE MOUNTAINS AND BEYOND HIKKER
            </h1>
            <p className="text-2xl text-gray-300 w-[600px]  flex items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor fjdfj fdkfjd ierei ierierei eifreirfe eifrejire
            </p>
            <div className="flex gap-5 mt-8">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 uppercase">
                Contact Us
              </button>
              <button className="bg-transparent  outline  outline-2	 text-white font-bold py-4 px-6 uppercase">
                Watch intro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
