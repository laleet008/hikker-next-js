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
          data-aos-duration="2000"
          className="relative destination md:text-[100px] uppercase text-[60px] text-gray-200 font-bold tracking-tighter flex"
        >
          testimonials
        </h1>
        <p
          className="absolute mt-12 tracking-wider md:block hidden  ml-2 font-bold  text-3xl"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          WHAT THE SAY ABOUT HIKKER
        </p>
        <p className="md:w-[500px] w-35px ml-16 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div
        className="bg-gray-100 m-16  "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex md:flex-row flex-col mx-8 md:justify-around md:mx-24 md:item-center md:align-center ">
          <div className="flex  md:my-16 mt-4">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="md:relative rounded-full md:h-[180px] md:w-[180px] h-[100px] w-[100px] border-8 border-gray-300"
            />
            <div className="absolute rounded-full md:h-12 md:w-12  mt-6 ml-20 md:mt-10 border-4 bg-orange-600  border-gray-300 md:ml-36 items-center flex ">
              <FaQuoteLeft className="text-white  text-xl ml-2" />
            </div>
          </div>
          <div className="my-16">
            <p className="md:w-[600px] w-[350px] text-xl italic text-gray-500">
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
        className="md:m-36 ml-32 flex flex-col md:flex-row gap-8 md:justify-between"
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
