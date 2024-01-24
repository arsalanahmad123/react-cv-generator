import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Logout from "./Logout";
import GeneratePDF from "./GeneratePDF";
import { DetailsProvider } from "../context/DetailsContext";

function Wrapper() {
  const { id } = useParams();

  return (
    <>
      <Logout />
      <DetailsProvider>
        <div className="flex justify-between items-center flex-col w-full lg:flex-row">
          <Routes>
            <Route element={<PersonalDetails />} path="/" />
            <Route element={<WorkHistory />} path="/work-history" />
            <Route element={<EducationDetails />} path="/education-details" />
            <Route element={<Skills />} path="/skills" />
          </Routes>
          <div className="w-full overflow-auto max-h-screen">
            <GeneratePDF id={id} />
          </div>
        </div>
        s
      </DetailsProvider>
    </>
  );
}

export default Wrapper;
