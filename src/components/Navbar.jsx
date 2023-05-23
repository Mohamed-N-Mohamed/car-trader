import React from "react";
import Logo from "../assets/logo.png";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(false);

  const handleNavClick = () => {
    setNavLinks((prevValue) => !prevValue);
  };
  return (
    <nav className='navbar flex flex-row justify-center lg:flex-row lg:justify-between items-center border border-gray-300 relative'>
      <div className='navbar-container flex flex-row lg:flex-row lg:justify-center items-center gap-4 p-4'>
        <div className='nav-icon lg:hidden'>
          <RxHamburgerMenu onClick={handleNavClick} />
        </div>
        <div className='nav-logo flex items-center'>
          <img src={Logo} alt='' className='w-8 md:w-12 lg:w-16' />
          <span className='logo-title text-xl md:text-2xl lg:text-3xl text-blue-950 font-medium'>
            CarTrader
          </span>
        </div>

        <div className='nav-links hidden lg:block'>
          <ul className='flex flex-col lg:flex-row items-center gap-4 text-sm'>
            <li className='text-blue-950 mt-2 hover:border-b-2 border-zinc-950 cursor-pointer'>
              Used Car
            </li>
            <li className='text-blue-950 mt-2 hover:border-b-2 border-zinc-950 cursor-pointer'>
              New Car
            </li>
            <li className='text-blue-950 mt-2 hover:border-b-2 border-zinc-950 cursor-pointer'>
              Sell You Car
            </li>
            <li className='text-blue-950 mt-2 hover:border-b-2 border-zinc-950 cursor-pointer'>
              Car Review
            </li>
          </ul>
        </div>
      </div>

      <div className='navbar-login lg:pr-12 flex flex-row lg:flex-row  items-center gap-4 text-center text-sm'>
        <div className='saved'>
          <AiOutlineHeart size={20} />
          <span className='login'>Liked</span>
        </div>

        <div className='login'>
          <BiUserCircle size={20} />
          <span className='login'>Login</span>
        </div>
      </div>

      {/* {navLinks && (
        <div className='navbar-hidden absolute top-16 left-4 w-1/2 h-36 bg-slate-200 border rounded'>
          <ul className="flex flex-col  items-center gap-4">
            <li>Used Car</li>
            <li>New Car</li>
            <li>Sell your car</li>
            <li>Car Review</li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
