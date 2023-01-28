import { useContext, useState } from "react";
import { StepperContext } from "../../context/StepperContext";

const Project = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [inputFieldP, setInputField] = useState([
    { ProjectName: "", Pdata: "" },
  ]);
  const handleChange = (index, event) => {
    let data = [...inputFieldP];
    const { name, value } = event.target;
    data[index][name] = value;
    setInputField(data);
    setUserData({ ...userData, inputFieldP });
  };

  const addFields = () => {
    let newField = { ProjectName: "", Pdata: "" };
    setInputField([...inputFieldP, newField]);
    console.log(userData.inputFieldP[0].Pdata);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        {inputFieldP.map((input, index) => {
          return (
            <div key={index}>
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Project Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  // Index is the "index" of the array and "event" is the data we type in the input field
                  name="ProjectName"
                  value={input.ProjectName}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  placeholder="Name of Project"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <textarea
                  name="Pdata"
                  value={input.Pdata}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  placeholder="Project description"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            </div>
          );
        })}
        <button
          className="m-2 p-2 outline-none border-none bg-black text-white"
          onClick={addFields}
        >
          Add More..
        </button>
      </div>
    </div>
  );
};

export default Project;
