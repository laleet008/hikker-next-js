import React from "react";
import Layout from "../../components/Layout";
import Navbar from "../Navbar";

const TrekDetail = () => {
  return (
    <>
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
                  <h1 className="text-3xl font-sans text-white font-semibold text-bold">
                    TREKKING DETAILS
                  </h1>
                  <p className="text-xl  mt-8 text-center w-[800px] flex text-gray-300 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-32  my-28 h-screen flex gap-16">
          <div className="w-2/3 bg-green-400"></div>
          <div className="w-1/3  bg-blue-300"></div>
        </div>
      </Layout>
    </>
  );
};

export default TrekDetail;
