import React from "react";

import { FaQuoteLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Layout from "../../components/Layout";
import Navbar from "../Navbar";
import About from "../../components/About";
import Services from "../../components/Services";
import OurGuide from "../../components/OurGuide";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about_container">
        <Navbar />
        <hr className=" absolute mt-28  border-gray-200 w-full" />

        <div className="flex  ">
          <div className="flex  w-full">
            <div className="relative text-[120px] flex md:ml-[460px] mt-48 text-zinc-300 opacity-40	 font-medium">
              ABOUT US
            </div>
            <div className="absolute flex flex-col  items-center mt-[250px] ml-[360px]">
              <h1 className="text-[50px] font-sans text-white font-bold">
                ABOUT US
              </h1>
              <p className="text-lg text-white text-center w-[700px] flex items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor fjdfj fdkfjd ierei ierierei eifreirfe eifrejire
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <OurGuide />
    </Layout>
  );
};

export default AboutPage;
