import React from "react";
import Link from "next/link";

const Trip = () => {
  return (
    <div className="h-[600px] trip w-full flex  ">
      <video loop autoPlay className="relative w-full">
        <source src="video/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute flex justify-center align-center flex-col items-center h-[600px] px-96  ">
        <h1 className="text-[32px] tracking-wider	 text-white">
          EXPLORE FULL ITINERARIES & TRIP IDEAS FOR HIKING
        </h1>
        <p className="items-center flex text-center w-[600px] text-gray-300 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex  justify-center">
          <Link href="/">
            <button className="bg-orange-600  hover:bg-orange-700 text-white py-4 mt-8 px-12 uppercase">
              start journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trip;
