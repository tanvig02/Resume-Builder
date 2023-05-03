import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const buttonClick = () => {
    // whenever we click the button it will becone opposite of that state
    setNav(!nav);
  };

  return (
    <div className="w-full bg-[#9d1dba] sticky top-0 z-50">
      {/* fixed w-screen */}
      <div className=" text-white max-w-[1240px] xl:mx-auto mx-10 h-[80px] pt-3">
        <nav className="flex justify-between items-center ">
          <div className="font-bold font-mono text-4xl h-auto">
            {/* <img src={logo} alt="" className="w-20" /> */}
            RBuilder
          </div>

          {/* align-middle text-center space-x-7*/}
          <ul className="lg:flex align-middle space-x-7 pt-2 hidden ">
            <li className="cursor-pointer ">
              {/* <NavLink className="hover:text-black" to="/">
                Home
              </NavLink> */}
              <a className="hover:text-black" href="#home">
                Home
              </a>
            </li>
            <li className="cursor-pointer ">
              <a className="hover:text-black" href="/#about">
                About
              </a>
            </li>
            {/* Navbar */}
            {/* new comment navbar 2 */}
            <li className="cursor-pointer ">
              <NavLink className="hover:text-black" to="/signin">
                SignUp
              </NavLink>
            </li>
            <li className="cursor-pointer ">
              <NavLink className="hover:text-black" to="/login">
                LogIn
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-black" to="/resume">
                Create resume
              </NavLink>
            </li>
          </ul>

          {/* Mobile view */}
          <button onClick={buttonClick} className="text-white md:hidden">
            {!nav ? <FaBars /> : <FaTimes />}
          </button>
          <div className="">
            <ul
              onClick={buttonClick}
              // className="  hidden text-gray-700 pt-1 group-hover:block "
              className={
                !nav
                  ? "hidden"
                  : "w-screen flex flex-col py-10 space-y-14 font-semibold text-center top-[60px] bg-purple-400 z-10 left-0 text-gray-700 absolute"
              }
            >
              <li>
                {/* <NavLink to="/">Home</NavLink> */}
                <a href="/#home">Home </a>
              </li>
              <li className="">
                {/* <NavLink to="/about">About</NavLink> */}
                <a href="/#about">About </a>
              </li>
              <li className="">
                <NavLink to="/signin">SignUp</NavLink>
              </li>
              <li className="">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
