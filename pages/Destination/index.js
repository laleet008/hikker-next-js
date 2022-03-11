import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../Navbar";
import Journey from "../../components/Journey";
import Destination from "../../components/Destination";
import Trip from "../../components/Trip";

const DestinationPage = () => {
  return (
    <Layout>
      <div className="destination_container">
        <div className="">
          <Navbar />
          <hr className=" absolute mt-28  border-gray-200 w-full" />

          <div className="flex  ">
            <div className="flex  w-full">
              <div className="relative uppercase text-[100px] opacity-30 flex ml-[540px] mt-48 text-white font-medium">
                Destination
              </div>
              <div className="absolute flex flex-col  items-center mt-[250px] ml-[370px]">
                <h1 className="text-5xl font-sans text-white font-semibold text-bold">
                  TREKKING
                </h1>
                <p className="text-xl text-gray-300 mt-8 text-center w-[800px] flex ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Destination />
      <Trip />
      <Journey />
    </Layout>
  );
};

export default DestinationPage;
