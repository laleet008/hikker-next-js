import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not_found_container">
      <div className="">
        <Navbar />
        <hr className=" absolute mt-28  border-gray-200 w-full" />

        <div className="">
          <div className="flex flex-col gap-4 items-center justify-center align-center ">
            <h1 className="text-orange-600 text-[200px] text-bold mt-60">
              404
            </h1>
            <h2 className="text-white text-4xl  uppercase mt-[-40px]">
              Page not found
            </h2>
            <p className="text-gray-200 w-[500px]  text-center">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable
            </p>
            <Link href="/">
              <button
                className="bg-orange-600  hover:bg-orange-700 text-white py-4 px-12 uppercase"
                data-aos="fade-up"
              >
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
