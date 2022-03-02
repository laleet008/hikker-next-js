import React from "react";
import {
  FaMountain,
  FaAngleRight,
  FaCcVisa,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer bg-neutral-900" id="footer ">
      <div className="pt-16  ml-16 md:mr-24mt-16 flex text-white justify-around  md:flex-row gap-6 flex-col md:gap-0 ">
        <div className="" data-aos="fade-left" data-aos-duration="500">
          <div className="flex   ">
            <FaMountain className="text-3xl" />
            <div className="flex flex-col ml-4">
              <h1 className="logo_text ml-4 text-3xl text-bold text-white uppercase">
                {" "}
                hikker
              </h1>
              <p>Hiking and trekking</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-1 text-lg">
            <p>
              <span className="text-gray-400 ml-3">
                Lorem ipsum, dolor sit amet consectetur
              </span>
            </p>
            <p className="flex mt-2 ">
              <MdLocationOn className="text-lg mt-1 text-orange-500" />
              <span className="text-gray-400 ml-3">
                Jl. Raya Ubud No.88, Bali - 80571
              </span>
            </p>
            <p className="flex mt-2">
              <MdEmail className="text-lg mt-1 text-orange-500" />
              <span className="text-gray-400 ml-3">info@ngodistro.com</span>
            </p>
          </div>
        </div>
        <div
          className="mt-5 flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className=" font-bold text-2xl ml-3">Quick Links</h1>
          <div className="flex flex-col text-gray-300 text-lg">
            <a href="#" className="mt-3 flex gap-3  hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              About Us
            </a>
            <a
              href="#our_team"
              className="mt-3 flex gap-3 hover:text-orange-600"
            >
              <FaAngleRight className="mt-1 text-orange-600" /> Trekking
            </a>
            <a href="#footer" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Gallery
            </a>
            <a href="#" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Our Team{" "}
            </a>
            <a href="#" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Contact
            </a>
          </div>
        </div>
        <div
          className="mt-5 flex flex-col"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h1 className=" font-bold text-2xl ml-3">Quick Links</h1>
          <div className="flex flex-col text-gray-300 text-lg ">
            <a href="#" className="mt-3 flex gap-3  hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Privacy Policy
            </a>
            <a
              href="#our_team"
              className="mt-3 flex gap-3 hover:text-orange-600"
            >
              <FaAngleRight className="mt-1 text-orange-600" />
              Terms and Conditions
            </a>
            <a href="#footer" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Disclaimer
            </a>
            <a href="#" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Elements
            </a>
            <a href="#" className="mt-3 flex gap-3 hover:text-orange-600">
              <FaAngleRight className="mt-1 text-orange-600" />
              Support
            </a>
          </div>
        </div>

        <div
          className="mt-5 flex flex-col mb-16 mr-32"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="font-bold text-2xl">Newsletter</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          <div className="flex relative mt-8">
            <input
              type="text"
              className="absolute h-12 w-[280px] outline-0 pl-4"
              placeholder="Your email address"
            />
            <div
              className=" absolute left-[210px] h-full 
            "
            >
              <button className="text-white w-[80px] h-12 font-bold bg-orange-600">
                SEND
              </button>
            </div>
          </div>
          <div className="absolute mt-48 flex text-xl">
            <p className="text-gray-300">Payment:</p>
            <div className="flex ml-5 mt-1.5 text-orange-600 gap-5">
              {" "}
              <FaCcVisa />
              <FaCcPaypal />
              <RiMastercardFill />
              <FaApplePay className="text-3xl mt-[-5px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="lower_footer mt-8  text-gray-400">
        <div className="md:ml-32 ml-16 md:mr-24 flex  md:flex-row flex-col md:gap-0 gap-8 justify-between py-7">
          <div>
            <h2>Hiking & Trekking Mountain Template Kit by Jegtheme</h2>
          </div>

          <div className="flex">
            <div className="flex mt-1    ml-8  gap-4">
              Copyright © 2021. All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
