import React from "react";
import { Link } from "react-router-dom";
import home2 from "../images/home2.jpg";
import "../App.css";
import About from "./About";

const Home = () => {
  return (
    <>
      <div id="home" className="w-full bg-zinc-300 ">
        <div className=" max-w-[1230px]  xl:mx-auto mx-10 py-3 ">
          <div className="grid lg:grid-cols-2 gap-4 max-w-[1240px]">
            <div className=" space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-5xl py-2 md:text-4xl font-bold">
                Build a professional resume for free
              </h1>
              <p className="text-xl ">
                Build beautiful, recruiter-tested{" "}
                <a href="/resume" className="cursor-pointer text-blue-700">
                  resumes
                </a>{" "}
                in a few clicks! Our resume builder is powerful and easy to use,
                with a range of amazing functions. Custom-tailor resumes for any
                job within minutes. Increase your interview chances and rise
                above the competition.
              </p>
              <button className="bg-violet-500  hover:shadow-lg hover:shadow-blue-900 w-fit m-2 px-4 py-2 text-white rounded-xl">
                <Link className="hover:text-white" to="/resume">
                  Get Started
                </Link>
              </button>
            </div>
            <div className=" flex justify-center items-center">
              {<img className="sm:w-[500px] lg:w-[590px]" src={home2} alt="" />}
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
