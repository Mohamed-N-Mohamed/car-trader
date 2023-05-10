import React from "react";
import Logo from "../assets/logo.png";

import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='navbar flex flex-col lg:flex-row lg:justify-between items-center border border-gray-300'>
      <div className='navbar-container flex flex-col lg:flex-row lg:justify-center items-center gap-4 p-4'>
        <div className='nav-logo flex items-center'>
          <img src={Logo} alt='' className='w-8 md:w-12 lg:w-16' />
          <span className='logo-title text-xl md:text-2xl lg:text-3xl text-blue-950 font-medium'>
            CarTrader
          </span>
        </div>

        <div className='nav-links'>
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

      <div className='navbar-login lg:pr-12 flex flex-col lg:flex-row  items-center gap-4 text-center text-sm'>
        <div className='login'>
          <BiUserCircle size={20} />
          <span className='login'>Login</span>
        </div>

        <div className='saved'>
          <AiOutlineHeart size={20} />
          <span className='login'>Liked</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
