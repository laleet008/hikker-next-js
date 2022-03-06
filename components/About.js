import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div className="m-16 flex justify-between">
      <div data-aos="fade-right">
        <div className="flex gap-8">
          <FaQuoteLeft className="text-orange-600 text-6xl mt-2" />
          <h1 className="font-bold text-3xl w-[650px]">
            The Best Journeys In Life Are Those That Answer Questions You Never
            Thought To Ask
          </h1>
        </div>
        <p className="text-gray-400  w-[650px] mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </p>
        <div className="flex mt-6 font-medium text-lg gap-3">
          <TiTick className="mt-1 text-orange-600" />
          Vivamus starlord finibus, dictum massa eget suscipit metus nami
        </div>
        <div className="flex mt-4 font-medium text-lg gap-3">
          <TiTick className="mt-1 text-orange-600" />
          Cras ipsum libero, suscipit vitamin tellus vitae, feugiat ultricies
          purus
        </div>
        <div className="flex mt-4 font-medium text-lg gap-3">
          <TiTick className="mt-1 text-orange-600" />
          Morbi maximus mauris eget groot dignissim, in laoreet justo facilisis
        </div>
        <p className="text-gray-400  w-[650px] mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute
          irure
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 mt-8 px-6 uppercase">
          about us
        </button>
      </div>
      <div className="mr-16">
        <img
          src="https://images.pexels.com/photos/9575443/pexels-photo-9575443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="w-[500px] h-[550px] "
        />
      </div>
    </div>
  );
};

export default About;
