import React, { useEffect, useState, lazy } from "react";
import { Routes, Route, useParams } from "react-router-dom";
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

  // Load the template dynamically
  useEffect(() => {
    const importedTemplate = lazy(() => import(`../templates/${templateId}`));
    setTemplate(importedTemplate);
  }, [templateId]);

  return (
    <>
      <Logout />
      <DetailsProvider>
        <div className="flex justify-between items-center flex-col w-full lg:flex-row">
          <Routes>
            <Route element={<PersonalDetails />} path="/" />
            <Route
              element={<WorkHistory />}
              path="/cv-generating/work-history"
            />
            <Route
              element={<EducationDetails />}
              path="/cv-generating/education-details"
            />
            <Route element={<Skills />} path="/cv-generating/skills" />
          </Routes>
          <div className="w-full overflow-auto max-h-screen">
            <GeneratePDF Template={Template} />
          </div>
        </div>
        s
      </DetailsProvider>
    </>
  );
}

export default Wrapper;
