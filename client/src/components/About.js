import React from "react";
import res1 from "../images/res1.png";
import res2 from "../images/res2.png";
import res3 from "../images/res3.png";

const About = () => {
  return (
    <div className="flex flex-col justify-around items-center my-10 w-full bg-slate-300">
      <h1 className="text-4xl font-bold font-mono text-center">
        Three easy steps to build a professional resume
      </h1>
      <div className="flex flex-col sm:flex-row justify-around">
        {/* w-[400px] h-[600px] */}
        <div className="">
          <img src={res1} alt="" />
          <p className="text-xl text-center w-[400px]">
            1. Choose from our extensive template collection and personalize to
            your style.
          </p>
        </div>
        <div className="text-xl text-center ">
          <img src={res2} alt="" />
          <p className="w-[400px]">2. Add your Specifications.</p>
        </div>
        <div className="">
          <img src={res3} alt="" />
          <p className="text-xl text-center w-[400px]">
            3. Download in the file format you need and send!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
