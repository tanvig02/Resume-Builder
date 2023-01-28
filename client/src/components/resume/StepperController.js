import React from "react";

const StepperController = ({ handleClick, steps, currStep }) => {
  return (
    <>
      {console.log(currStep)}
      <div className="container flex justify-around mt-4 mb-8">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          className={`text-white bg-slate-400 py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-black transition duration-200 ease-in-out ${
            currStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
        {/* Next button */}
        <button
          onClick={() => handleClick("next")}
          className="bg-green-400 text-white py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-green-700 hover:text-white transition duration-200 ease-in-out"
        >
          {currStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    </>
  );
};

export default StepperController;
