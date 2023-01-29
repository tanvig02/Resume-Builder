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
      {/* h-screen pb-2 changes bsaicbdib */}
      <div className="flex flex-col justify-around items-center  w-full bg-slate-300">
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl my-10 h-[1000px] bg-white">
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
