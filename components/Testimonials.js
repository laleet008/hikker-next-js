import React from "react";
import {
  FaQuoteLeft,
  FaMapMarked,
  FaBiking,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col  items-center">
        <h1
          data-aos="fade-right"
          className="relative destination uppercase text-[90px] text-gray-200 font-bold tracking-tighter flex"
        >
          testimonials
        </h1>
        <p
          className="absolute mt-12 tracking-wider ml-2 font-bold  text-3xl"
          data-aos="fade-left"
        >
          WHAT THE SAY ABOUT HIKKER
        </p>
        <p className="w-[500px] ml-16 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div
        className="bg-gray-100 m-16  "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex justify-around mx-24 item-center align-center ">
          <div className="flex my-16">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="relative rounded-full h-[180px] w-[180px] border-8 border-gray-300"
            />
            <div className="absolute rounded-full h-12 w-12  mt-10 border-4 bg-orange-600  border-gray-300 ml-36 items-center flex ">
              <FaQuoteLeft className="text-white  text-xl ml-2" />
            </div>
          </div>
          <div className="my-16">
            <p className="w-[600px] text-xl italic text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className="flex mt-4 justify-between">
              <div>
                ⭐⭐⭐⭐⭐
                <p className="font-medium text-xl mt-3"> John Doe</p>
                <p className="text-gray-500">Hiker</p>
              </div>
              <div>
                <FaQuoteLeft className="text-orange-600 text-6xl mt-2 mr-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-36 flex justify-between"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex gap-4">
          <FaRegCalendarAlt className="text-orange-600 text-6xl" />
          <div>
            <h1 className="font-bold text-3xl text-orange-600">
              <span className="text-black"> 15 </span> +
            </h1>
            <p className="text-gray-500">Years Of Experiences</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaMapMarked className="text-orange-600 text-6xl" />
          <div>
            <h1 className="font-bold text-3xl text-orange-600">
              <span className="text-black"> 60 </span> +
            </h1>
            <p className="text-gray-500">Vest Destinations</p>
          </div>
        </div>
        <div className="flex gap-4">
          <FaBiking className="text-orange-600 text-6xl" />
          <div>
            <h1 className="font-bold text-3xl text-orange-600">
              <span className="text-black"> 3,9454 </span> +
            </h1>
            <p className="text-gray-500">Satisfied Hikers</p>
          </div>
        </div>
        <div className="flex gap-4">
          <AiOutlineSafetyCertificate className="text-orange-600 text-6xl" />
          <div>
            <h1 className="font-bold text-3xl text-orange-600">
              <span className="text-black"> 30 </span> +
            </h1>
            <p className="text-gray-500">Certified Guides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
