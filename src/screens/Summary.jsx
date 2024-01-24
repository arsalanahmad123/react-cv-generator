import React from "react";
import { NavLink } from "react-router-dom";

function Summary() {
  return (
    <>
      <NavLink
        className="text-lg font-semibold text-center text-white bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 transition-all duration-200 fixed top-3 left-3"
        to="/cv-generating/"
      >
        Edit{" "}
      </NavLink>
      <NavLink
        className="text-lg font-semibold text-center text-white bg-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-700 transition-all duration-200 fixed bottom-5 right-5"
        to={"/final"}
      >
        Download
      </NavLink>
    </>
  );
}

export default Summary;
