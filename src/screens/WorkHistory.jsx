import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDetails } from "../context/DetailsContext";

function WorkHistory() {
  const { updateWorkDetails } = useDetails();

  const navigate = useNavigate();
  const [workDetails, setWorkDetails] = useState({
    jobtitle: "",
    company: "",
    startingYear: "",
    endingYear: "",
    details: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("workDetails");
    if (storedData) {
      setWorkDetails(JSON.parse(storedData));
      updateWorkDetails(JSON.parse(storedData));
    }
  }, []);

  const years = Array.from({ length: 100 }, (_, index) => 1925 + index);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkDetails({
      ...workDetails,
      [name]: value,
    });
    updateWorkDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("workDetails", JSON.stringify(workDetails));
    navigate("/cv-generating/education-details");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-slate-200 rounded-md min-h-[120vh] w-full lg:w-[600px]">
          <h1 className="text-5xl font-bold text-center text-indigo-600 uppercase">
            Work History
          </h1>
          <p className="text-center pt-3 text-gray-700">
            Tell us about your recent work
          </p>
          <div className="flex flex-row gap-2 mt-6 p-2">
            <div className="mb-4">
              <label
                htmlFor="jobtitle"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobtitle"
                name="jobtitle"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workDetails.jobtitle}
                placeholder="e.g Software Engineer"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company-Employer
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workDetails.company}
                placeholder="e.g Google"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-start items-center flex-row gap-32  mb-4 p-2">
            <div>
              <label
                htmlFor="startingYear"
                className="block text-gray-700 font-bold mb-2"
              >
                Starting Year
              </label>
              <select
                name="startingYear"
                id="startingYear"
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workDetails.startingYear}
                required
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="endingYear"
                className="block text-gray-700 font-bold mb-2"
              >
                Ending Year
              </label>
              <select
                name="endingYear"
                id="endingYear"
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workDetails.endingYear}
                required
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4 p-2">
            <label
              htmlFor="details"
              className="block text-gray-700 font-bold mb-2"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={workDetails.details}
              placeholder="e.g. Worked on various projects"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-between items-center mt-4">
            <NavLink
              to="/cv-generating/personal-details"
              className="text-xl font-bold text-center text-white bg-slate-500 px-4 py-2 rounded-lg hover:bg-slate-600 transition-all duration-200 mt-5"
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

export default WorkHistory;
