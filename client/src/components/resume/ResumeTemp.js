// import { useLocation } from "react";
import { useLocation } from "react-router-dom";
import "../resume/ResumeTemp.css";
// import { StepperContext } from "../context/StepperContext";

import profile from "../../images/profile.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";

const ResumeTemp = () => {
  const location = useLocation();
  const { userData } = location.state;
  const PData = userData.inputFieldP;
  const Cdata = userData.inputFieldC;
  const Edata = userData.inputFieldE;
  console.log("Resume template");
  console.log(userData.inputFieldP[0].Pdata);

  const PrintCV = () => {
    window.print();
  };

  return (
    <>
      <div className="cv" id="cv-temp">
        <div className="cv-row">
          <div className="cv-wrap">
            <div className="cv-name">{userData.Name}</div>
            <div className="exprecince">{userData.Profile}</div>

            {/* Education div */}
            <div className="cv-content">
              <div className="head-title">Education</div>
              {Edata.map((input, index) => {
                return (
                  <div key={index}>
                    <div className="cv-content-item">
                      <div className="title">{Edata[index].UniName}</div>
                      <div className="time">Aug 2018 - 2019 - Pune</div>
                      <div className="exprecince">
                        Grades: {Edata[index].Percent}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Work Experience div */}
            <div className="cv-content">
              <div className="head-title">Work Exprecince / Projects</div>
              {PData.map((input, index) => {
                return (
                  <div key={index}>
                    <div className="cv-content-item">
                      <div className="title">{PData[index].ProjectName}</div>
                      <div className="exprecince">{PData[index].Pdata}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Details */}
          <div className="cv-wrap">
            <div className="avatar">
              <img src={profile} alt="" />
            </div>
            <div className="info">
              <div className="title">{userData.Address}</div>
              <p>
                <a href="mailto:info@ahmetaksungur.com">{userData.Email}</a>
              </p>
              <p>
                <a href="tel:+915555554444">{userData.PhoneNo}</a>
              </p>
              <p></p>
            </div>
            <div className="cv-skills">
              <div className="head-title">Primary Skills</div>
              <div className="cv-skills-item">
                <div className="title">{userData.Tech1}</div>
              </div>
              <div className="head-title">Problem Solving Skills</div>
              <div className="cv-skills-item">
                <div className="title">{userData.Tech2}</div>
              </div>
            </div>
            <div className="cv-skills">
              <div className="head-title">Certificate</div>
              {Cdata.map((input, index) => {
                return (
                  <div key={index}>
                    <div className="cv-skills-item">
                      <div className="title">{Cdata[index].Certifi}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cv-skills">
              <div className="head-title">Hobbies</div>
              <div className="cv-skills-item">
                <div className="title">{userData.Hobbies}</div>
              </div>
            </div>
            <div className="cv-skills">
              <div className="head-title">languages you know</div>
              <div className="cv-skills-item">
                <div className="title">{userData.languages}</div>
              </div>
            </div>
            <div className="cv-social">
              <a href="/">
                {" "}
                <AiFillGithub className="cv-social-tag" />
              </a>
              <a href="/">
                {" "}
                <AiFillLinkedin className="cv-social-tag" />
              </a>
              <a href="/">
                {" "}
                <FaHackerrank className="cv-social-tag" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={PrintCV}
        className="m-2 p-2 bg-black text-white outline-none border-none align-middle"
      >
        Print CV
      </button>
    </>
  );
};

export default ResumeTemp;
