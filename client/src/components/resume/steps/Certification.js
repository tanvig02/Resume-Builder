import { useContext, useState } from "react";
import { StepperContext } from "../../context/StepperContext";

const Certification = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [inputFieldC, setInputField] = useState([{ Certifi: "" }]);
  const handleChange = (index, event) => {
    const data = [...inputFieldC];
    const { name, value } = event.target;
    data[index][name] = value;
    setInputField(data);
    setUserData({ ...userData, inputFieldC });
  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const addField = () => {
    let newField = { Certifi: "" };
    setInputField([...inputFieldC, newField]);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        {inputFieldC.map((input, index) => {
          return (
            <div key={index}>
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                {" "}
                Certificate
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  name="Certifi"
                  value={input.Certifi}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  placeholder="Certificate Name"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            </div>
          );
        })}
        <button
          className="outline-none border-none bg-black text-white m-2 p-2"
          onClick={addField}
        >
          Add
        </button>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Technical Language
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange2}
            name="Tech1"
            value={userData["Tech1"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Add all Technical skills"
          />
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange2}
            name="Tech2"
            value={userData["Tech2"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Add all Problem solving skills"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
