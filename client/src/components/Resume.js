import React, { useState } from "react";

import Stepper from "./resume/Stepper";
import StepperController from "./resume/StepperController";
import { StepperContext } from "./context/StepperContext";

import Profile from "./resume/steps/Profile";
import Education from "./resume/steps/Education";
import Skills from "./resume/steps/Skills";
import Certificate from "./resume/steps/Certification";
import Project from "./resume/steps/Project";
import Final from "./resume/steps/Final";

const Resume = () => {
  const [currStep, setCurrStep] = useState(1);
  console.log(currStep);

  //variable that holds user data
  const [userData, setUserData] = useState("");
  const [finalData, setfinalData] = useState([]);

  const steps = [
    "Profile",
    "Education",
    "Tech and certification",
    "Projects and Experience",
    "lang or hobbies",
    "Finish",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Profile />;
      case 2:
        return <Education />;
      case 3:
        return <Certificate />;
      case 4:
        return <Project />;
      case 5:
        return <Skills />;
      case 6:
        return <Final />;
    }
  };

  const handleClick = (direction) => {
    //to determine which button is clicked
    let newStep = currStep;

    direction === "next" ? newStep++ : newStep--;
    //check if the step is within bound
    //if both condition are true then setcurrStep to newStep
    newStep > 0 && newStep <= steps.length && setCurrStep(newStep);
  };

  return (
    <>
      <div className="flex flex-col justify-around items-center h-screen w-full bg-slate-200">
        <h1 className="text-4xl font-bold font-mono text-center">
          Three easy steps to build a professional resume
        </h1>
        <div className="flex flex-col sm:flex-row justify-around">
          {/* w-[400px] h-[600px] */}
          <div className="">
            <img src={res1} alt="" />
            <p className="text-xl text-center w-[400px]">
              1. Choose from our extensive template collection and personalize
              to your style.
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

        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          {/* {Stepper} */}
          <div className="container horizontal mt-3">
            <Stepper steps={steps} currStep={currStep} />
          </div>

          {/* Display components */}
          <div className="my-10 p-10">
            <StepperContext.Provider
              value={{ userData, setUserData, finalData, setfinalData }}
            >
              {displayStep(currStep)}
            </StepperContext.Provider>
          </div>

          {/* Navigation controller */}
          {/* in last step is will not show the back and next button */}
          {currStep !== steps.length && (
            <StepperController
              handleClick={handleClick}
              steps={steps}
              currStep={currStep}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Resume;
