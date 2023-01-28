import { useContext, useState } from "react";
import { StepperContext } from "../../context/StepperContext";

const Education = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [inputFieldE, setInputField] = useState([{ UniName: "", Percent: "" }]);

  const handleChange = (index, event) => {
    let data = [...inputFieldE];
    const { name, value } = event.target;
    data[index][name] = value;
    setInputField(data);
    setUserData({ ...userData, inputFieldE });
  };

  const addField = () => {
    let newField = { UniName: "", Percent: "" }; //object
    setInputField([...inputFieldE, newField]); //setting new added object values in the array
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        {inputFieldE.map((input, index) => {
          return (
            <div key={index}>
              <div className="font-bold h-6 mt-2 text-gray-900 text-s leading-8 uppercase">
                University Name
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  name="UniName"
                  value={input.UniName}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div className="font-bold h-6 mt-3 text-gray-900 text-s leading-8 uppercase">
                Percentage
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  name="Percent"
                  value={input.Percent}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-700"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            </div>
          );
        })}

        {/* new input box */}
        <button
          className="outline-none border-none bg-black text-white m-2 p-2"
          onClick={addField}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Education;
