import React from "react";

import Navbar from "../pages/Navbar";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <Navbar className="" />

        <hr className=" absolute mt-28  border-gray-100 w-full" />

        <div className="flex ml-32 ">
          <h1
            className=" text-[200px] flex ml-60  mt-52 main-header text-gray-400  h-32 "
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-duration="2000"
          >
            HIKKER
          </h1>
          <div className="flex flex-col absolute mt-[320px]   items-center">
            <h1
              className="text-[46px] flex items-center w-full text-center text-white font-bold "
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-duration="2000"
            >
              BE PREPARED FOR THE MOUNTAINS AND BEYOND
              {/* <div className=" items centerml-24">AND BEYOND</div> */}
            </h1>
            <p
              className="text-2xl text-gray-300 w-[600px] mt-4 text-center flex items-center "
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor fjdfj fdkfjd ierei ierierei eifreirfe eifrejire
            </p>
            <div className="flex gap-5 mt-8 ">
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
