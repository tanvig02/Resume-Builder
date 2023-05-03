import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Protected from "./components/Protected";
import ResumeTemp from "./components/resume/ResumeTemp";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // "proxy": "https://fair-blue-lemur-veil.cyclic.app",
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Protected Component={Resume} />} />
        <Route
          path="/template"
          element={<Protected Component={ResumeTemp} />}
        />
      </Routes>
    </>
  );
};

export default App;
