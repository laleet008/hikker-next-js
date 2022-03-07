import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaFacebookF,
} from "react-icons/fa";

import { BsFacebook } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
import Dropdown from "../../components/dropdowns/TrekDropdown";
import PagesDropdown from "../../components/dropdowns/PagesDropdown";
import BlogDropdown from "../../components/dropdowns/BlogDropdown";

const Navbar = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="">
        <div className=" absolute mx-32 mt-12  mb-8">
          <div className="flex  gap-32">
            <div className="uppercase text-white font-bold flex flex-col">
              <div>
                <img
                  src="https://templatekit.jegtheme.com/hikker/wp-content/uploads/sites/139/2021/08/logo.png"
                  alt=""
                  className="h-12 mb-4"
                />
              </div>
            </div>

            <ul className="flex  mt-2 list-none gap-8  uppercase text-base font-semibold text- text-white text-4">
              <li className="text-orange-600">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <li className="hover:text-orange-600">
                <Link href="/about">
                  <a>About us</a>
                </Link>
              </li>
              <li>
                <Dropdown />
              </li>
              <li>
                <PagesDropdown />
              </li>
              <li>
                <BlogDropdown />
              </li>

              {/*  */}

              <li className="hover:text-orange-600">contact</li>
            </ul>

            <div className="flex gap-4 text-xl mt-2 ">
              <div className="h-8 w-8 bg-white rounded-full text-orange-600 hover:bg-orange-600 hover:text-white  flex items-center cursor-pointer justify-center">
                <FaFacebookF className="   icon_social" />
              </div>
              <div className="h-8 w-8 bg-white rounded-full hover:bg-orange-600 hover:text-white text-orange-600 flex items-center justify-center cursor-pointer">
                <FaInstagram className="    icon_social" />
              </div>
              <div className="h-8 w-8 bg-white rounded-full hover:bg-orange-600 text-orange-600 hover:text-white flex items-center justify-center cursor-pointer">
                <FaYoutube className="e  icon_social" />
              </div>
              <div className="h-8 w-8 bg-white rounded-full flex hover:bg-orange-600  text-orange-600 hover:text-white items-center justify-center cursor-pointer">
                <SiDiscord className="   icon_social" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
