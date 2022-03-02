import React, { useEffect } from "react";
// import Link from "next/Link";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-neutral-800 sticky h-14  ">
        <div className="flex justify-between mx-8 p-2">
          <div className="mt-1 flex">
            <FaLeaf className="mt-2.5 mr-1 text-lime-600" />
            <a href="/" className="text-2xl text-lime-600">
              <span className="text-white font-bolder">envato</span>market
            </a>
          </div>
          <div>
            <a href="">
              <button className="bg-lime-600 hover:bg-green-700 text-white  py-1.5 px-5 rounded">
                Buy now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
