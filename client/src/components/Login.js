import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const loginUser = async (event) => {
    event.preventDefault();

    // const email = event.target.value;
    // const password = event.target.value;

    //Protected login
    console.log("login useEffect1");
    localStorage.setItem("login", true);
    navigate("/resume");

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.status === false || !data) {
      window.alert(data.data.message);
      console.log(data.data.message);
    } else {
      window.alert(data.data.message);
      console.log(data.data.message);
      localStorage.setItem("authenticated", true);
      navigate("/");
    }
  };
  //redirecting
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/resume");
    }
    console.log("login useEffect");
  });

  return (
    <>
      <div className=" h-screen bg-[#bec4cc] flex justify-center py-4 ">
        <form
          method="POST"
          className=" h-[400px] max-w-[400px] w-full mx-auto bg-[#400b51] p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            LogIn
          </h2>
          <div className="flex flex-col text-gray-300 py-2">
            <label placeholder="Enter your email">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="email"
            />

            <label placeholder="Enter password">Password</label>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-[#9eacc0] mt-2 p-2 mb-2 focus:border-blue-500 focus:bg-[#658bc1] focus:outline-none"
              type="password"
            />

            <button
              onClick={loginUser}
              className="w-full mt-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-black hover:text-white "
            >
              LogIn
            </button>
            <div className="text-s">
              <p>Don't have account? </p>
              <p>
                Create New Account -- <a href="/signin"> SignUp</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
