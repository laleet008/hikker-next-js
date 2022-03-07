import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const Explore = () => {
  return (
    <>
      <div className="my-16">
        <div className="">
          <div className="flex md:flex-row flex-col justify-between mx-16 gap-8 mt-[-180px]  relative ">
            <div
              className="w-[550px] shadow-lg bg-white "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="ml-8">
                <FaMapMarkedAlt className="text-5xl text-orange-600" />
                <h1 className=" text-black text-2xl font-medium my-4">
                  Secret Locations
                </h1>
                <p className="text-gray-500 my-4">
                  Secret Locations Lorem ipsum dolor sit amet, consectet
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                </p>
                <div className="flex">
                  <h1 className="uppercase font-bold text-lg text-orange-600">
                    read more
                  </h1>
                  <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                </div>
              </div>
            </div>
            {/* second */}
            <div
              className="w-[550px] shadow-lg bg-white "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="ml-8 ">
                <MdOutlineSecurity className="text-4xl text-orange-600" />
                <h1 className=" text-black text-2xl font-medium my-4">
                  Secret Locations
                </h1>
                <p className="text-gray-500 my-4">
                  Secret Locations Lorem ipsum dolor sit amet, consectet
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                </p>
                <div className="flex">
                  <h1 className="uppercase font-bold text-lg text-orange-600">
                    read more
                  </h1>
                  <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div
              className="w-[550px] shadow-lg h-[300px] bg-white "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="ml-8">
                <IoIosPeople className="text-4xl text-orange-600" />
                <h1 className=" text-black text-2xl font-medium my-4">
                  Secret Locations
                </h1>
                <p className="text-gray-500 my-4">
                  Secret Locations Lorem ipsum dolor sit amet, consectet
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                </p>
                <div className="flex">
                  <h1 className="uppercase font-bold text-lg text-orange-600">
                    read more
                  </h1>
                  <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:gap-0 gap-0 md:ml-[450px] ml-16 md:mt-16 mt-8 mb-16">
          <p className="text-lg">
            Don’t hesitate to contact us to get better Information.
          </p>

          <h1 className="md:ml-4 uppercase font-bold text-lg text-orange-600">
            explore all trekking
          </h1>
          <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
        </div>
      </div>
    </>
  );
};

export default Explore;
