import React, { useEffect, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Logout from "./Logout";
import GeneratePDF from "./GeneratePDF";
import { DetailsProvider, useDetails } from "../context/DetailsContext";

function Wrapper() {
  const { templateId } = useDetails();
  const [Template, setTemplate] = useState(null);

  const selectedTemplate =
    templateId || localStorage.getItem("selectedTemplate");

  // Load the template dynamically
  useEffect(() => {
    const importedTemplate = lazy(
      () => import(`../templates/${templateId}`) /* @vite-ignore */
    );
    setTemplate(importedTemplate);
  }, [selectedTemplate]);

  return (
    <DetailsProvider>
      <Logout />
      <div className="flex flex-col lg:flex-row justify-between min-h-full">
        <Routes>
          <Route element={<PersonalDetails />} path="/" />
          <Route element={<WorkHistory />} path="/work-history" />
          <Route element={<EducationDetails />} path="/education-details" />
          <Route element={<Skills />} path="/skills" />
        </Routes>
        <GeneratePDF Template={Template} />
      </div>
    </DetailsProvider>
  );
}

export default Wrapper;
