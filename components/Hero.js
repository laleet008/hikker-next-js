import React from "react";

import Navbar from "../pages/Navbar";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <Navbar className="" />

        <hr className=" absolute mt-28  border-gray-200 w-full" />

        <div className="flex ml-32 ">
          <h1
            className=" md:text-[210px] text-16 flex md:ml-[280px] ml-4 font-semibold mt-60 main-header text-gray-500  "
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-duration="2000"
          >
            HIKKER
          </h1>
          <div className="flex flex-col absolute md:mt-[360px] mt-8 ml-16  items-center">
            <h1
              className="text-[55px] flex items-center w-full text-center text-white font-bold "
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-duration="2000"
            >
              BE PREPARED FOR THE MOUNTAINS AND BEYOND
              {/* <div className=" items centerml-24">AND BEYOND</div> */}
            </h1>
            <p
              className="text-gray-300 w-[900px] text-lg text-center flex items-center "
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor
            </p>
            <div className="flex gap-5 mt-10 ">
              <button
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-duration="2000"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 uppercase"
              >
                Contact Us
              </button>
              <button
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-duration="2000"
                className="bg-transparent  outline  outline-2	 text-white font-bold py-4 px-6 uppercase"
              >
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
