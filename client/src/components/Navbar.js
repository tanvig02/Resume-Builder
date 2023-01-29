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

        <div className="md:hidden z-10 pt-3" onClick={buttonClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div>
          {/* absolute top-0 left-0 w-full h-screen */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#afcfff] flex flex-col justify-center items-center"
            }
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
