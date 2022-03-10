import React from "react";
import { createPopper } from "@popperjs/core";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="">
          <div className=" relative inline-flex align-middle w-full">
            <button
              className="flex hover:text-orange-600 "
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <a className="flex font-semibold uppercase">
                Treks <FaChevronDown className="mt-1 ml-2" />
              </a>
            </button>
            <div className="my-7">
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block  " : "hidden ") +
                  "bg-white absolute float-left list-none text-left px-4 flex flex-col gap-4 py-4 w-48  "
                }
              >
                <Link
                  href="/destination"
                  className="text-sm py-2 px-4 font-normal  w-full block "
                  onClick={(e) => e.preventDefault()}
                >
                  <a className=" hover:text-orange-600 uppercase tracking-[5px] font-medium text-black">
                    trek
                  </a>
                </Link>
                <Link
                  href="/"
                  className="text-sm py-2 mt-4 px-4 font-normal  w-full block"
                  onClick={(e) => e.preventDefault()}
                >
                  <a className=" hover:text-orange-600 uppercase text-black">
                    trek details
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
