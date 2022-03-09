import React, { useState } from "react";
import journeys from "../pages/newApi/journeyApi";

const Journey = () => {
  const [journeyData, setJourneyData] = useState(journeys);
  return (
    <>
      <div className="mt-32 mb-16 ">
        <div className="flex flex-col  items-center">
          <h1
            className="relative destination md:text-[100px] text-[60px] text-gray-200 font-bold tracking-tighter flex"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            JOURNEYS
          </h1>
          <p
            className="absolute mt-12 hidden md:block tracking-wider ml-2 font-bold  text-3xl"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            GALLERY OF OUR TOURS
          </p>
          <p className="md:w-[500px] w-[350px] md:ml-16 ml-8 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div
          className="flex md:flex-row flex-col mx-16 gap-8 mt-16 "
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
      </div>
    </>
  );
};

export default Journey;
