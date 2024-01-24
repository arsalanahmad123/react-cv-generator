import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import { useDetails } from "../context/DetailsContext";
function PersonalDetails() {
  const { updatePersonalDetails } = useDetails();

  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState({
    firstname: "",
    surname: "",
    profession: "",
    city: "",
    country: "",
    zip: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("personalDetails");
    if (storedData) {
      setPersonalDetails(JSON.parse(storedData));
      updatePersonalDetails(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    updatePersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
    navigate("/cv-generating/work-history");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-5 bg-slate-200 rounded-md min-h-[120vh] w-full lg:w-[600px]">
          <h1 className="text-4xl font-bold text-center text-indigo-600 uppercase">
            Personal Details
          </h1>
          <div>
            <ImageUpload />
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={personalDetails.firstname}
                placeholder="e.g Arsalan"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-gray-700 font-bold mb-2"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={personalDetails.surname}
                placeholder="e.g Ahmad"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="profession"
              className="block text-gray-700 font-bold mb-2"
            >
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={personalDetails.profession}
              placeholder="e.g Software Engineer"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-row gap-2 mt-2">
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={personalDetails.city}
                placeholder="e.g Lahore"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={personalDetails.country}
                  placeholder="e.g Pakistan"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={personalDetails.zip}
                  placeholder="e.g 123456"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={personalDetails.phone}
                placeholder="e.g 1234567890"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                value={personalDetails.email}
                placeholder="e.g Tqg0C@example.com"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-xl font-bold text-center text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200 float-end mt-5"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default PersonalDetails;
