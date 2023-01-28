import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";

const Profile = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="Name"
            value={userData["Name"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Name"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Profile
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <textarea
            onChange={handleChange}
            name="Profile"
            value={userData["Profile"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Profile Description"
            type="texarea"
            rows="4"
            cols="50"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Email
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="Email"
            value={userData["Email"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Email"
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Phone No.
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="PhoneNo"
            value={userData["PhoneNo"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Phone No."
          />
        </div>

        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {" "}
          Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            name="Address"
            value={userData["Address"] || ""}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            placeholder="Address"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
