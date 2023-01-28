import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";

const Skills = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Name the languages you are fluent in
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="languages"
            value={userData["languages"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="languages"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Hobbies
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="Hobbies"
            value={userData["Hobbies"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Hobbies"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
