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
    <div>
      {/* fixed w-screen */}
      <div className="flex justify-around p-2 align-middle text-white bg-[#9d1dba]  ">
        <div className="font-bold font-mono text-4xl text-[#fff] ">
          {/* <img src={logo} alt="" className="w-20" /> */}
          <h1>RBuilder</h1>
        </div>

        {/* align-middle text-center space-x-7*/}
        <ul className="md:flex align-middle space-x-7 pt-2 hidden ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* Navbar */}
          {/* new comment navbar 2 */}
          <li>
            <NavLink to="/signin">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Create resume</NavLink>
          </li>
        </ul>

        {/* Mobile view */}
        <div className="flex flex-col relative">
          <button
            onClick={buttonClick}
            className=" bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex  flex-col items-center"
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </button>

          <div className="inline-block relative  ">
            <ul
              onClick={buttonClick}
              // className="  hidden text-gray-700 pt-1 group-hover:block "
              className={
                !nav ? "hidden " : "  text-gray-700 pt-1 absolute block "
              }
            >
              <li>
                <NavLink
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="/signin"
                >
                  SignUp
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
