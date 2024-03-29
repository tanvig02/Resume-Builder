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
      <div className="w-full bg-zinc-300 ">
        <div className=" max-w-[1230px]  xl:mx-auto mx-10 py-3 ">
          <div className="flex flex-col justify-around items-center ">
            <div className=" shadow-xl rounded-2xl pb-2 bg-white ">
              {/* {Stepper} */}
              <div className="container horizontal mt-3 lg:w-[800px]">
                <Stepper steps={steps} currStep={currStep} />
              </div>

              {/* Display components */}
              <div className="p-10">
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
        </div>
      </div>
    </>
  );
};

export default Resume;
