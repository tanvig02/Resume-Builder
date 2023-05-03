import React from "react";
import res1 from "../images/res1.png";
import res2 from "../images/res2.png";
import res3 from "../images/res3.png";
import "font-awesome/css/font-awesome.min.css";
import { RiFileEditFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div id="about" className=" w-full bg-zinc-300 ">
        <div className="max-w-[1240px] xl:m-auto">
          <div className="flex flex-col justify-around items-center my-10 space-y-16 p-4">
            <h1 className="text-4xl font-bold font-mono text-center">
              Try our professional CV Builder now
            </h1>

            <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center space-y-20 space-x-10">
              <div className=" text-center space-y-8">
                <h1 className="font-semibold text-lg text-blue-800">
                  Powerful and easy-to-use
                </h1>
                <div className="flex lg:flex-col lg:justify-center lg:items-center">
                  <img width={200} src={res1} alt="" />
                  <p className="w-[400px]">
                    Created to be suitable for all levels of job seekers. Our
                    host of powerful features ranges from an excellent
                    spell-checker, to job tracking, multi-format export,
                    auto-generated summaries and more.
                  </p>
                </div>
              </div>
              <div className=" text-center space-y-8 ">
                <h1 className="font-semibold text-lg text-blue-800">
                  Edit and customize online
                </h1>
                <div className="flex lg:flex-col lg:justify-center lg:items-center ">
                  <p className="w-[400px]">
                    Customize resumes in a few clicks with no additional
                    software. Cloud and offline syncing save your changes (even
                    if you lose your internet connection) and allow you to stay
                    creative and organized. A host of functions provide you with
                    additional options and safety. Data protection, a great
                    interface and other features make resume creation a breeze!
                  </p>
                  <img width={200} src={res2} alt="" />
                </div>
              </div>
              <div className="text-center  space-y-8">
                <h1 className="font-semibold text-lg text-blue-800">
                  Export to file formats
                </h1>
                <div className="flex lg:flex-col lg:justify-center lg:items-center">
                  <img width={200} src={res3} alt="" />
                  <p className="w-[400px]">
                    Make use of PDF files to perfectly preserve your beautiful
                    formatting. Export into Word files if your target employer
                    has that requirement. Applicant tracking systems, hiring
                    managers, recruiters and corporate rules may require you to
                    submit your resume in different file formats. That’s why
                    we’ve included multi-format export in our free resume
                    builder functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
