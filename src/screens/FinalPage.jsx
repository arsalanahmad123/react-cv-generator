import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const FinalPage = () => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [workDetails, setWorkDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState({});
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState(null);

  const downloadPDF = () => {
    const element = document.getElementById("final-page");
    const options = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  useEffect(() => {
    try {
      const storedPersonalDetails = localStorage.getItem("personalDetails");
      const storedWorkDetails = localStorage.getItem("workDetails");
      const storedEducationDetails = localStorage.getItem("educationDetails");
      const storedSkills = localStorage.getItem("skills");
      const storedImage = localStorage.getItem("image");

      if (storedPersonalDetails) {
        setPersonalDetails(JSON.parse(storedPersonalDetails));
      }

      if (storedWorkDetails) {
        setWorkDetails(JSON.parse(storedWorkDetails));
      }

      if (storedEducationDetails) {
        setEducationDetails(JSON.parse(storedEducationDetails));
      }

      if (storedSkills) {
        setSkills(JSON.parse(storedSkills));
      }

      if (storedImage) {
        setImage(storedImage);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <section id="final-page" className="flex flex-col w-full">
        <section size="A4" className="p-10 flex flex-col ">
          <div className="flex flex-col ">
            <span className="uppercase text-3xl font-bold">
              {personalDetails.firstname
                ? personalDetails.firstname
                : "First Name"}{" "}
              {personalDetails.surname ? personalDetails.surname : "Last Name"}
            </span>
            <span className="uppercase text-[12px] ml-2 mt-2">
              {personalDetails.profession
                ? personalDetails.profession
                : "Profession"}
            </span>
            <span className="ml-2 text-justify  mt-3 leading-5 text-gray-700 text-sm">
              Motivated and accomplished professional dedicated to excellence in
              [profession]. Bringing a wealth of experience and expertise in
              [key skills]. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Doloremque, iste!
            </span>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-1">
            <div className="flex flex-col ">
              <img
                src={image ? image : "https://via.placeholder.com/150"}
                alt=""
                className="w-32 h-32"
              />
              <div className="flex flex-col leading-5 mt-2 ">
                <span className="font-bold mt-3">Contact</span>
                <hr />
                <span className="flex flex-col w-full">
                  <span className="font-semibold text-[14px]">Profession:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.profession
                      ? personalDetails.profession
                      : "Profession Name"}
                  </span>
                </span>
                <span className="flex flex-col ">
                  <span className="font-semibold text-[14px]">City:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.city ? personalDetails.city : "City Name"}
                  </span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[14px]">Country:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.country
                      ? personalDetails.country
                      : "Country Name"}
                  </span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[14px]">Zip:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.zip ? personalDetails.zip : "postal code"}
                  </span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[14px]">Phone:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.phone
                      ? personalDetails.phone
                      : "Phone Number"}
                  </span>
                </span>
                <span className="flex flex-col max-w-[80%]">
                  <span className="font-semibold text-[14px]">Email:</span>
                  <span className="text-sm ml-5">
                    {personalDetails.email ? personalDetails.email : "Email"}
                  </span>
                </span>
                <hr />
                <div className="flex flex-col mt-3">
                  <span className="font-bold">Skills</span>
                  <ul>
                    {skills &&
                      skills.map((skill, index) => (
                        <li key={index}>
                          <span className="text-sm ml-5"> - {skill}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-l-2 w-[70%]">
              <div className="flex flex-col p-2">
                <span className="text-2xl uppercase font-bold">
                  Work History
                </span>
                <hr />
                <span className="mt-2 text-sm text-gray-700">
                  {workDetails.details
                    ? workDetails.details
                    : "Summarize your work exprerience in two to 3 lines "}
                </span>
                <div className="flex flex-row mt-2 justify-between items-center">
                  <span className="font-bold">
                    {workDetails.company ? workDetails.company : "Company Name"}
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center mt-2 p-2 bg-slate-200 gap-2 ">
                  <span className="font-bold text-[14px]">
                    {workDetails.jobtitle ? workDetails.jobtitle : "Job Title"}
                  </span>
                  <span className="text-sm">
                    {workDetails.startingYear
                      ? workDetails.startingYear
                      : "Starting Year"}{" "}
                    {"-"}{" "}
                    {workDetails.endingYear
                      ? workDetails.endingYear
                      : "Ending Year"}
                  </span>
                </div>
                <div className="mt-10">
                  <span className="text-2xl uppercase font-bold">
                    Education
                    <hr />
                  </span>
                  <div className="flex flex-col mt-4 bg-slate-200 p-2">
                    <span className="font-semibold text-[14px]">
                      {educationDetails.degree
                        ? educationDetails.degree
                        : "Degree"}{" "}
                      :{" "}
                      <span>
                        {educationDetails.fieldofstudy
                          ? educationDetails.fieldofstudy
                          : "Field of Study"}
                      </span>
                    </span>
                    <span className="italic text-[13px] text-gray-700 ml-auto">
                      {educationDetails.institutionName
                        ? educationDetails.institutionName
                        : "Institution"}
                    </span>
                    <span className="italic text-[13px] text-gray-700 ml-auto">
                      {educationDetails.graduationEndMonth
                        ? educationDetails.graduationEndMonth
                        : "Month"}{" "}
                      {educationDetails.graduationEndYear
                        ? educationDetails.graduationEndYear
                        : "Year"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <NavLink
        to={"/cv-generating"}
        className="text-lg font-semibold text-center text-white bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 transition-all duration-200 fixed top-5 right-5"
      >
        Edit Summary
      </NavLink>
      <button
        className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2 text-center fixed bottom-2 right-2"
        onClick={downloadPDF}
      >
        Download PDF
      </button>
    </>
  );
};

export default FinalPage;
