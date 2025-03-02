import React from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const FooterLock = () => {
  return (
    <footer
      className="bg-transparent text-gray-900 py-6 lg:fixed xl:fixed bottom-0 w-full rounded-xl shadow-lg"
      id="footerLock"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="text-center md:text-left">
          <p className="flex items-center gap-2 mt-2 text-gray-700">
            <FaMapMarkerAlt className="text-gray-900" /> Pekanbaru, Indonesia
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} Ahmad Sholihin. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLock;
