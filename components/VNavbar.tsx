"use client";

import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

interface Props {}

const VNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* mobile menu logo and buttons*/}
      <div className="flex justify-between px-4 py-2 items-center md:hidden">
        <div>Logo</div>
        <div>
          <button
            onClick={handleMenuClick}
            className={
              isOpen ? "hidden" : "duration-300 transform transition-transform"
            }
          >
            <MdMenu size={40} />
          </button>
          <button
            onClick={handleMenuClick}
            className={
              isOpen ? "duration-300 transform transition-transform" : "hidden"
            }
          >
            <MdClose size={40} />
          </button>
        </div>
      </div>

      {/* mobile menu items  */}
      <div
        className={`${
          !isOpen ? "-translate-x-full" : "translate-x-0"
        } transform top-0 left-0 w-64 bg-textSoft fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        test test
        <br /> test test test
      </div>

      {/* desktop menu */}
    </div>
  );
};

export default VNavbar;
