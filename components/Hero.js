import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div className="flex">
        <img
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="relative"
        />
        <div className="absolute mx-32 mt-12 ">
          <div className="flex gap-[190px]">
            <div className="uppercase text-white font-bold flex flex-col">
              <h1 className="text-3xl ml-4">hikker</h1>
              <p className="text-[12px] w-[230px] text-gray-300">
                Hikking and treaking
              </p>
            </div>
            <ul className="flex list-none gap-8 uppercase text-xl font-bold text-white">
              <li className="text-orange-600">Home</li>
              <li className="hover:text-orange-600">About us</li>
              <li className="hover:text-orange-600">trek</li>
              <li className="hover:text-orange-600">blog</li>
              <li className="hover:text-orange-600">contact</li>
            </ul>
            <div className="flex gap-4 text-xl text-white ">
              <FaFacebook className="hover:text-orange-600" />
              <FaInstagram />
              <FaYoutube />
              <SiDiscord />
            </div>
          </div>
        </div>

        <hr className="border-2" />

        <div className="flex absolute w-full">
          <div className="relative text-[280px] flex ml-60 mt-40 text-gray-600 font-medium">
            HIKKER
          </div>
          <div className="absolute flex flex-col  items-center mt-[360px] ml-32">
            <h1 className="text-[50px] font-sans text-white text-bold">
              BE PREPARED FOR THE MOUNTAINS AND BEYOND HIKKER
            </h1>
            <p className="text-2xl text-gray-300 w-[600px] flex items-center">
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
