import React from "react";

function template({ personalDetails, image, workDetails, educationDetails }) {
  console.log(personalDetails);

  return (
    <>
      <section className="p-10 flex flex-col overflow-y-auto w-[600px]">
        <div className="flex flex-col ">
          <span className="uppercase text-3xl font-bold">
            FirstName {"  "}
            Last Name
          </span>
          <span className="uppercase span-[12px] ml-2 mt-2">Profession</span>
          <span className="ml-2 span-justify  mt-3 leading-5 span-gray-700 span-sm">
            Motivated and accomplished professional dedicated to excellence in
            [profession]. Bringing a wealth of experience and expertise in [key
            skills]. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, iste!
          </span>
        </div>
        <div className="mt-4 flex flex-row justify-between gap-1">
          <div className="flex flex-col">
            <img
              src={"https://via.placeholder.com/150"}
              alt=""
              className="w-32 h-32"
            />
            <div className="flex flex-col leading-5 mt-2 ">
              <span className="font-bold mt-3">Contact</span>
              <hr />
              <span className="flex flex-col w-full">
                <span className="font-semibold span-[14px]">Profession:</span>
                <span className="span-sm ml-5">Profession Name</span>
              </span>
              <span className="flex flex-col ">
                <span className="font-semibold span-[14px]">City:</span>
                <span className="span-sm ml-5">City Name</span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Country:</span>
                <span className="span-sm ml-5">Country Name</span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Zip:</span>
                <span className="span-sm ml-5">postal code</span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Phone:</span>
                <span className="span-sm ml-5">Phone Number</span>
              </span>
              <span className="flex flex-col max-w-[80%]">
                <span className="font-semibold span-[14px]">Email:</span>
                <span className="span-sm ml-5">Email</span>
              </span>
              <hr />
              <div className="flex flex-col mt-3">
                <span className="font-bold">Skills</span>
                <ul>
                  <li>
                    <span className="span-sm ml-5"> - Skill-1</span>
                    <span className="span-sm ml-5"> - Skill-2</span>
                    <span className="span-sm ml-5"> - Skill-3</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-l-2 w-[70%]">
            <div className="flex flex-col p-2">
              <span className="span-2xl uppercase font-bold">Work History</span>
              <hr />
              <span className="mt-2 span-sm span-gray-700">
                Summarize your work exprerience in two to 3 lines
              </span>
              <div className="flex flex-row mt-2 justify-between items-center">
                <span className="font-bold">Company Name</span>
              </div>
              <div className="flex flex-row justify-between items-center mt-2 p-2 bg-slate-200 gap-2 ">
                <span className="font-bold span-[14px]">Job Title</span>
                <span className="span-sm">Starting Year - Ending Year</span>
              </div>
              <div className="mt-10">
                <span className="span-2xl uppercase font-bold">
                  Education
                  <hr />
                </span>
                <div className="flex flex-col mt-4 bg-slate-200 p-2">
                  <span className="font-semibold span-[14px]">
                    Degree
                    <span>Field of Study</span>
                  </span>
                  <span className="italic span-[13px] span-gray-700 ml-auto">
                    Institution
                  </span>
                  <span className="italic span-[13px] span-gray-700 ml-auto">
                    Month -Year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default template;
