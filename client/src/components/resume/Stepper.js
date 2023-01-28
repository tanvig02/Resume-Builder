import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  console.log("currStep " + currStep);

  const updateStep = (stepNum, steps) => {
    const stepInfo = [...steps];
    let count = 0;

    // console.log(stepNum);
    //array containg indo of all steps
    // console.log(steps.steps);
    console.log(steps);
    while (count < stepInfo.length) {
      if (count === stepNum) {
        stepInfo[count] = {
          ...stepInfo[count],
          highlighted: true,
          selected: true,
          complete: true,
        };
        count++;
      }
      //step complete
      else if (count < stepNum) {
        stepInfo[count] = {
          ...stepInfo[count],
          highlighted: false,
          selected: true,
          complete: true,
        };
        count++;
      }
      //step pending
      else {
        stepInfo[count] = {
          ...stepInfo[count],
          highlighted: false,
          selected: false,
          complete: false,
        };
        count++;
      }
    }
    // console.log(stepInfo);
    return stepInfo;
  };

  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          discription: step,
          complete: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    // console.log(currStep);
    stepRef.current = stepsState;
    const CurrStep = updateStep(currStep - 1, stepRef.current);

    setNewStep(CurrStep);
    // console.log(CurrStep);
  }, [steps, currStep]);
  // console.log(newStep);

  const displaySteps = newStep.map((step, index) => {
    // console.log(newStep.selected); //all steps of form
    // console.log(index);
    // console.log(step);

    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "flex w-full items-center"
            : "w-full flex items-center"
        }
      >
        {console.log("selected " + index)}
        {console.log("newStep")}
        {console.log(newStep[0].selected)}

        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-500 h-12 w-12 flex items-center justify-center py-3 ${
              newStep[index].selected
                ? "bg-green-600 text-white font-bold border-green-600"
                : "bg-blue-600 text-white font-bold border-blue-600"
            }`}
          >
            {/* display number */}
            {step.complete ? (
              <span className="text-white font-bold text-xl">✓</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* display discription */}
            {step.discription}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.complete ? "border-green-600" : "border-green-300"
          }`}
        >
          {/* display line */}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="mx-4 p-4 flex justify-between items-center">
        {displaySteps}
      </div>
    </>
  );
};

export default Stepper;
