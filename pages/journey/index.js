import React, { useState } from "react";

import Layout from "../../components/Layout";
import Testimonials from "../../components/Testimonials";
import Navbar from "../Navbar";
import journeys from "../../pages/newApi/journeyApi";

const JourneyPage = () => {
  const [journeyData, setJourneyData] = useState(journeys);
  return (
    <>
      <Layout>
        <div className="   ">
          <div className="journey_container">
            <Navbar />
            <hr className=" absolute mt-28  border-gray-200 w-full" />

            <div className="flex  ">
              <div className="flex  w-full">
                <div className="relative text-[120px] flex md:ml-[460px] mt-48 text-zinc-300 opacity-40	 font-medium">
                  JOURNEYS
                </div>
                <div className="absolute flex flex-col  items-center mt-[250px] ml-[360px]">
                  <h1 className="text-[50px] font-sans text-white font-bold">
                    GALLERY OF OUR TOURS
                  </h1>
                  <p className="text-lg mt-4 text-white text-center w-[700px] flex items-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor fjdfj fdkfjd ierei ierierei eifreirfe
                    eifrejire
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex md:flex-row flex-col mx-16 gap-8 mt-28 mb-16 "
            data-aos="fade-up"
          >
            {journeyData.map((journey) => {
              const { id, title, img, des } = journey;
              return (
                <div key={id} className="img-container-journey">
                  <img
                    src={img}
                    alt=""
                    className="md:journey-img md:h-[450px] h-[300px]"
                  />
                  <div className="overlay">
                    <h1 className="md:font-bold font-sm md:text-xl">{title}</h1>
                    <p className="mt-4 ">{des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex md:flex-row flex-col mx-16 gap-8 mt-28 mb-16 "
            data-aos="fade-up"
          >
            {journeyData.map((journey) => {
              const { id, title, img, des } = journey;
              return (
                <div key={id} className="img-container-journey">
                  <img
                    src={img}
                    alt=""
                    className="md:journey-img md:h-[450px] h-[300px]"
                  />
                  <div className="overlay">
                    <h1 className="md:font-bold font-sm md:text-xl">{title}</h1>
                    <p className="mt-4 ">{des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Testimonials />
        </div>
      </Layout>
    </>
  );
};

export default JourneyPage;
