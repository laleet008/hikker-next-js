import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import destinationData from "../newApi/destination";
import Layout from "../../components/Layout";
import Navbar from "../Navbar";
import Journey from "../../components/Journey";

const Destination = () => {
  const [destData, setDestData] = useState(destinationData);
  return (
    <Layout>
      <div className="destination_container">
        <div className="">
          <Navbar />
          <div className="flex  ">
            <div className="flex  w-full">
              <div className="relative uppercase text-[180px] flex ml-60 mt-40 text-gray-600 font-medium">
                Destination
              </div>
              <div className="absolute flex flex-col  items-center mt-[260px] ml-[480px]">
                <h1 className="text-[50px] font-sans text-white text-bold">
                  MOST POPULAR TREKKING
                </h1>
                <p className="text-2xl text-white w-[600px] flex items-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor fjdfj fdkfjd ierei ierierei eifreirfe
                  eifrejire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-20 mx-16 ">
        {destData.map((destination) => {
          const { id, title, description, img, days, guest, price } =
            destination;

          return (
            <div key={id}>
              <div className="flex">
                <img
                  src={img}
                  alt=""
                  className="relative h-[580px] w-[400px] destination-img"
                />
                <div className="flex absolute p-8  mt-[400px] ml-14">
                  <div className="flex flex-col items-center bg-orange-600 font-bold text-white p-6">
                    {guest} <span>Guest</span>
                  </div>
                  <div className="flex flex-col items-center font-bold text-white bg-orange-600 p-6 border-l">
                    {days}
                    <span>Days</span>
                  </div>
                  <div className="bg-white p-8 items-center font-bold text-lg text-orange-600">
                    {price}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-gray-400 mt-4 w-[400px] ">{description}</p>
                <div className="flex mt-8 mb-16">
                  <h1 className=" uppercase font-bold text-lg text-orange-600">
                    start journey
                  </h1>
                  <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Journey />
    </Layout>
  );
};

export default Destination;
