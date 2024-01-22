import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";

function EducationDetails() {
  const { updateEducationDetails } = useDetails();
  const navigate = useNavigate();
  const [educationDetails, setEducationDetails] = useState({
    institutionName: "",
    degree: "",
    fieldofstudy: "",
    graduationEndMonth: "",
    graduationEndYear: "",
  });

  const Degress = [
    "High School",
    "Diploma",
    "Bachelor",
    "Master",
    "Doctorate",
    "Other",
  ];

  const years = Array.from({ length: 15 }, (_, index) => 2024 + index);

  useEffect(() => {
    const storedData = localStorage.getItem("educationDetails");
    if (storedData) {
      setEducationDetails(JSON.parse(storedData));
      updateEducationDetails(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    updateEducationDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem(
      "educationDetails",
      JSON.stringify({ ...educationDetails, [name]: value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cv-generating/skills");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-slate-200 rounded-md min-h-screen min-w-full lg:w-[600px]">
          <h1 className="text-4xl font-bold text-center text-indigo-600 uppercase">
            Education Details
          </h1>
          <p className="mt-2 text-center text-gray-700">
            Enter your education experience so far, even if you are a current
            student or did not graduate.
          </p>
          <div className="flex flex-row gap-2 mt-10 pt-10">
            <div className="mb-4 ">
              <label
                htmlFor="institutionName"
                className="block text-gray-700 font-bold mb-2"
              >
                Institution Name
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={educationDetails.institutionName}
                placeholder="e.g University of Science and Technology"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="degree"
                className="block text-gray-700 font-bold mb-2"
              >
                Degree
              </label>
              <select
                id="degree"
                name="degree"
                className="shadow  border rounded w-full pt-[5px] pb-[5px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={educationDetails.degree}
                onChange={handleChange}
                required
              >
                {Degress.map((degree) => (
                  <option key={degree} value={degree}>
                    {degree}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="fieldofstudy"
              className="block text-gray-700 font-bold mb-2"
            >
              Field of Study
            </label>
            <input
              type="text"
              id="fieldofstudy"
              name="fieldofstudy"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={educationDetails.fieldofstudy}
              placeholder="e.g Computer Science"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex  flex-row gap-2 mt-5">
            <div>
              <label
                htmlFor="graduationEndMonth"
                className="block text-gray-700 font-bold mb-2"
              >
                Graduation Date or Expected
              </label>
              <select
                id="graduationEndMonth"
                name="graduationEndMonth"
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={educationDetails.graduationEndMonth}
                onChange={handleChange}
                required
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div>
              <select
                id="graduationEndYear"
                name="graduationEndYear"
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-8"
                value={educationDetails.graduationEndYear}
                onChange={handleChange}
                required
              >
                <option value="">Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-10">
            <NavLink
              to={"/cv-generating/work-history"}
              className="text-xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 float-start mt-5"
            >
              Previous
            </NavLink>
            <button
              type="submit"
              className="text-xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 float-end mt-5"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EducationDetails;
