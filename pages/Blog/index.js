import React, { useState } from "react";
import blog from "../newApi/blog";
import { FaClock } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Layout from "../../components/Layout";

import Navbar from "../Navbar";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Blog = () => {
  const [blogData, setBlogData] = useState(blog);
  return (
    <Layout>
      <div className="blog_container">
        <div className="">
          <Navbar />

          <div className="flex  ">
            <div className="flex  w-full">
              <div className="relative uppercase text-[180px] flex ml-[400px] mt-40 text-gray-600 font-medium">
                article
              </div>
              <div className="absolute flex flex-col  items-center mt-[260px] ml-[480px]">
                <h1 className="text-[50px] font-sans uppercase text-white text-bold">
                  Our blog
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
      <div className="flex mt-12 gap-12 mx-32 mb-8">
        <div className="flex flex-col gap-8 mt-8">
          {blogData.map((blog, index) => {
            const { id, title, img, date, des } = blog;

            if (index < 2) {
              return (
                <div className="flex gap-10" key={id}>
                  <img src={img} alt="" className="h-[320px] w-[300px]" />
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
                <div className="flex gap-10" key={id}>
                  <img src={img} alt="" className="h-[320px] w-[300px]" />
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
    </Layout>
  );
};

export default Blog;
