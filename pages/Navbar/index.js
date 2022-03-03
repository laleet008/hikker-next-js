import React, { useEffect } from "react";
// import Link from "next/Link";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="">
        <div className=" absolute mx-32 mt-12  mb-8">
          <div className="flex gap-[190px]">
            <div className="uppercase text-white font-bold flex flex-col">
              <h1 className="text-3xl ml-4">hikker</h1>
              <p className="text-[12px] w-[230px] text-gray-300">
                Hikking and treaking
              </p>
            </div>
            <ul className="flex list-none gap-8 uppercase text-xl font-bold text-white">
              <li className="text-orange-600">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <li className="hover:text-orange-600">
                <Link href="about">
                  <a>About us</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="destination">
                  <a>Trek</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">contact</li>
            </ul>
            <div className="flex gap-4 text-xl text-white ">
              <FaFacebook className="hover:text-orange-600" />
              <FaInstagram className="hover:text-orange-600" />
              <FaYoutube className="hover:text-orange-600" />
              <SiDiscord className="hover:text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
