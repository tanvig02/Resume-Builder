import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Final = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    console.log("userdata");
    console.log(userData.Name);
  };

  const display = () => {
    console.log("userData");
    console.log(userData);
    // console.log(userData.Name);
  };

  return (
    <>
      <h1 className="font-bold m-4 text-2xl  ">
        Your Details has been recorded !
      </h1>
      <h4 className=" m-4 text-xl ">
        Click the Download button to download your Resume 👇
      </h4>

      <div className="flow-root">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center float-right">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>

          <Link to="/template" state={{ userData: userData }}>
            <span onClick={display}>Generate CV</span>
          </Link>

          {/* <span onChange={handleChange} onClick={display}>
            Generate CV
          </span> */}
        </button>
        {/* <button onClick={display}>Generate CV</button> */}
      </div>
    </>
  );
};

export default Final;
