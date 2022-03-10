import React from "react";

const OurGuide = () => {
  return (
    <div className="">
      <div className="flex flex-col mt-40 items-center">
        <h1
          className="relative destination uppercase md:text-[100px] text-[60px] text-gray-200 font-bold tracking-tighter flex"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Our Guide
        </h1>
        <p
          className="absolute mt-14 hidden md:block  ml-2 font-bold  text-3xl"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          PROFESSIONAL GUIDE
        </p>
        <p className="md:w-[500px] w-[350px] md:ml-16 ml-8 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="mt-32">
        <div className="flex gap-8 mx-16 my-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img"
              className="w-[900px] h-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3848196/pexels-photo-3848196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img"
              className="w-[900px] h-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5461401/pexels-photo-5461401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img"
              className="w-[900px] h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGuide;
