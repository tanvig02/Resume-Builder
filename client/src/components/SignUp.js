import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import user from "../../../server/model/userSchema";
// import signup from "../images/homePage.jpg";
// import { RiAccountPinCircleFill } from "react-icons/ri";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (event) => {
    // const { name, value } = event.target;
    name = event.target.name;
    value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();

    //we can get values like of input stored in json format
    // by input.name, input.email
    const { name, email, phone, work, password, cpassword } = input;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //when we will send the data to server it will be in json format,
      //server do not understand json format so we need to convert it to string
      body: JSON.stringify({
        // name: input.name,
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data.status);
    console.log(data.data.message);
    if (data.status === 422 || !data) {
      window.alert(data.data.message);
      console.log(data.data.message);
    } else {
      window.alert(data.data.message);
      console.log(data.data.message);

      navigate("/login");
    }
  };

  return (
    <>
      {/* grid grid-cols-1 sm:grid-cols-1 */}
      {/* <div className="  h-[450px] w-[1500px] rounded-lg justify-center align-middle"> */}
      {/* registration form div flex-col */}
      <div className="bg-[#bec4cc] flex  justify-center py-4 ">
        <form
          method="POST"
          className="max-w-[400px] w-full mx-auto bg-[#400b51] p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign In
          </h2>
          <div className="flex flex-col text-gray-300 py-2">
            <label placeholder="Enter an Username">
              {/* <RiAccountPinCircleFill /> */}
              UserName
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
            />
            <label htmlFor="" placeholder="Enter your email">
              Email
            </label>
            <input
              name="email"
              value={input.email}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="email"
            />
            <label placeholder="Enter your profession">phone</label>
            <input
              name="phone"
              value={input.phone}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="text"
            />
            <label placeholder="Enter your profession">Work</label>
            <input
              name="work"
              value={input.work}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="text"
            />
            <label placeholder="Enter password">Password</label>
            <input
              name="password"
              value={input.password}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="password"
            />
            <label placeholder="rewrite your password">Confirm Password</label>
            <input
              name="cpassword"
              value={input.cpassword}
              onChange={handleInput}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="password"
            />

            <p>
              Already Registered?
              <NavLink className="underline px-2 bold" to="/login">
                Login
              </NavLink>
            </p>

            <button
              id="home"
              onClick={postData}
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-black hover:text-white "
            >
              Sign In
            </button>
          </div>
        </form>
        {/* <div className="hidden sm:block h-10 w-10">
            <img className="w-full h-full object-cover" src={signup} alt="" />
          </div> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default SignUp;
