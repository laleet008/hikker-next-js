import React, { useState } from "react";
import blog from "../pages/newApi/blog";
import { FaClock } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Blog = () => {
  const [blogData, setBlogData] = useState(blog);
  return (
    <div className="md:my-32 my-16 md:mx-16 mx-8">
      <div className="flex flex-col items-center">
        <h1
          className="relative uppercase md:text-[100px] text-[60px] text-gray-200 font-bold tracking-tighter flex"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          our blog
        </h1>
        <p
          className="absolute md:mt-16 md:block hidden  uppercase tracking-wider ml-2 font-bold text-xl md:text-3xl"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          latest blog
        </p>
        <p className="md:w-[600px] w-[350px] text-gray-500 flex align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex md:flex-row flex-col mt-12 gap-12 ">
        <div className="flex flex-col gap-8 mt-8">
          {blogData.map((blog, index) => {
            const { id, title, img, date, des } = blog;

            if (index < 2) {
              return (
                <div
                  className="flex md:flex-row flex-col md:gap-10 gap-4"
                  key={id}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-[320px] w-[300px]"
                    data-aos="flip-right"
                    data-aos-duration="1000"
                  />
                  <div className="mt-7">
                    <h1 className="text-2xl font-bold w-[300px]">{title}</h1>
                    <div className="flex mt-5 gap-2 text-gray-500">
                      <FaClock className="mt-1" />
                      {date}
                    </div>
                    <p className="w-[300px] mt-5">{des}</p>
                    <div className="flex mt-6">
                      <h1 className="uppercase font-bold text-lg text-orange-600">
                        read more
                      </h1>
                      <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {blogData.map((blog, index) => {
            const { id, title, img, date, des } = blog;

            if (index > 1) {
              return (
                <div className="flex md:flex-row flex-col gap-10" key={id}>
                  <img
                    src={img}
                    alt=""
                    className="h-[320px] w-[300px]"
                    data-aos="flip-left"
                    data-aos-duration="1000"
                  />
                  <div className="mt-7">
                    <h1 className="text-2xl font-bold w-[300px]">{title}</h1>
                    <div className="flex mt-5 gap-2 text-gray-500">
                      <FaClock className="mt-1" />
                      {date}
                    </div>
                    <p className="w-[300px] mt-5">{des}</p>
                    <div className="flex mt-6">
                      <h1 className="uppercase font-bold text-lg text-orange-600">
                        read more
                      </h1>
                      <FiArrowRight className="text-lg text-orange-600 mt-1 ml-4" />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
