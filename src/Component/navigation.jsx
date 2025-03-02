import React from "react";
import { Link } from "react-scroll";
import { IoSchool } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";

function Navigation() {
  return (
    <div
      className="fixed -bottom-4 left-0 right-0 text-center p-4 pt-20 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto z-10 lg:right-2"
      id="navigation"
    >
      <div className="flex justify-between mx-auto bg-white text-red-600 p-3 rounded-full border-red-600 border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          to="first"
          activeClass="active"
          className="flex w-[20px] h-[20px] justify-center items-center cursor-pointer hover:-translate-y-1 lg:mb-3"
          spy={true}
          smooth={true}
          offset={100}
        >
          <TiHome />
        </Link>
        <Link
          to="hobby"
          activeClass="active"
          className="flex w-[20px] h-[20px] justify-center items-center cursor-pointer hover:-translate-y-1 lg:mb-3"
          spy={true}
          smooth={true}
          offset={100}
        >
          <DiAndroid />
        </Link>
        <Link
          to="profile"
          activeClass="active"
          className="flex w-[20px] h-[20px] justify-center items-center cursor-pointer hover:-translate-y-1 lg:mb-3"
          spy={true}
          smooth={true}
          offset={100}
        >
          <IoSchool />
        </Link>
        <Link
          to="portofolio"
          activeClass="active"
          className="flex w-[20px] h-[20px] justify-center items-center cursor-pointer hover:-translate-y-1 lg:mb-3"
          spy={true}
          smooth={true}
          offset={100}
        >
          <MdOutlineWorkHistory />
        </Link>

        <Link
          to="contact"
          activeClass="active"
          className="flex w-[20px] h-[20px] justify-center items-center cursor-pointer hover:-translate-y-1"
          spy={true}
          smooth={true}
          offset={100}
        >
          <RiContactsBook3Line />
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
