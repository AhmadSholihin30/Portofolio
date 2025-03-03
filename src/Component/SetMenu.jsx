import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdOutlineCloseFullscreen } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="" id="first">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-black rounded-lg text-2xl hover:cursor-pointer"
      >
        <HiOutlineBars3 />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex">
          <div
            className="w-64 bg-primary shadow-lg p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className="text-gray-700 ">
              <div className="flex justify-center items-center">
                <img
                  src="/image/Img1.png"
                  alt="menuImage"
                  className="w-20 h-20 rounded-full object-cover bg-primary shadow-xl border-4 border-white"
                />
                <div className=" flex ml-2 items-center font-semibold text-xl">
                  My Portofolio
                </div>
              </div>
            </button>
            <ul className="mt-4 space-y-2 hover:cursor-pointer">
              <a href="#first">
                <li className="p-2 hover:bg-gray-200 rounded-lg text-black">
                  Home
                </li>
              </a>
              <a href="#hobby">
              <li className="p-2 hover:bg-gray-200 rounded-lg text-black">
                About
              </li>
              </a>
              <a href="#portofolio">
              <li className="p-2 hover:bg-gray-200 rounded-lg text-black">
                Recent work
              </li>
              </a>
              <a href="#contact">
                <li className="p-2 hover:bg-gray-200 rounded-lg text-black">
                  Contact
                </li>
              </a>
            </ul>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </div>
  );
}
