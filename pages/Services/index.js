import React, { useState } from "react";
import services from "../newApi/serviceApi";

const Services = () => {
  const [ourServices, setOurServices] = useState(services);

  return (
    <div className="bg-black ">
      <div className="flex ">
        <div className=" mt-24 mb-12">
          <div className="flex flex-col ml-32">
            <h1 className="relative destination text-[80px] uppercase text-gray-700 font-bold tracking-tighter flex">
              why hikker
            </h1>
            <p className="absolute mt-12 text-white tracking-wider ml-2 font-bold w-[600px] text-3xl">
              WE PROVIDE THE BEST HIKING AND TREKKING TO YOU JOURNEY
            </p>
          </div>
          <div className="mb-[-120px]">
            <img
              src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="w-[800px]  mt-40"
            />
          </div>
        </div>
        <div className="text-white ml-32 mt-32">
          <p className="text-gray-500 w-[600px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>

          <div className="text-white flex gap-16 mt-16">
            <div className="flex flex-col gap-8">
              {ourServices.map((service, index) => {
                const { id, title, icon, description } = service;
                if (index < 2) {
                  return (
                    <div key={id}>
                      <h1 className="text-5xl text-orange-600"> {icon} </h1>
                      <h1 className="text-2xl font-bold mt-4"> {title}</h1>
                      <p className="w-[300px]  text-gray-400 mt-3">
                        {description}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col gap-8">
              {ourServices.map((service, index) => {
                const { id, title, icon, description } = service;
                if (index > 1) {
                  return (
                    <div key={id}>
                      <h1 className="text-5xl text-orange-600">{icon}</h1>
                      <h1 className="text-2xl font-bold mt-4">{title}</h1>
                      <p className="w-[300px] text-gray-400">{description}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
