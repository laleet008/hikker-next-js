import React, { useState } from "react";
import journeys from "../newApi/journeyApi";

const Journey = () => {
  const [journeyData, setJourneyData] = useState(journeys);
  return (
    <>
      <div className="mt-32 mb-16 ">
        <div className="flex flex-col  items-center">
          <h1 className="relative destination text-[90px] text-gray-200 font-bold tracking-tighter flex">
            JOURNEYS
          </h1>
          <p className="absolute mt-12 tracking-wider ml-2 font-bold  text-3xl">
            GALLERY OF OUR TOURS
          </p>
          <p className="w-[500px] ml-16 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex mx-16 gap-8 mt-16 ">
          {journeyData.map((journey) => {
            const { id, title, img, des } = journey;
            return (
              <div key={id} className="img-container-journey">
                <img src={img} alt="" className="journey-img h-[450px]" />
                <div className="overlay">
                  <h1 className=" font-bold text-xl">{title}</h1>
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
