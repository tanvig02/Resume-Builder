import React from "react";
import { NavLink } from "react-router-dom";
import home2 from "../images/home2.jpg";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col  justify-center md:item-start w-full ">
            <h1 className="text-5xl py-2 md:text-7xl font-bold">
              Build a professional resume for free
            </h1>
            <p className="text-2xl w-[500px] my-6">
              Create your resume easily with our free builder and professional
              templates.
            </p>
            <button className="bg-violet-500 hover:bg-violet-700 w-fit m-2 px-4 py-2 text-white rounded-xl">
              <NavLink className="hover:text-white" to="/resume">
                Get Started
              </NavLink>
            </button>
          </div>
          <div>
            <img src={home2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
