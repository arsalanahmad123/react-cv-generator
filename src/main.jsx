import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./screens/Wrapper.jsx";
import FinalPage from "./screens/FinalPage.jsx";
import SelectTemplate from "./screens/SelectTemplate.jsx";
import { DetailsProvider } from "./context/DetailsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DetailsProvider>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<Wrapper />} path="/:id/cv-generating/*" />
          <Route element={<FinalPage />} path="/summary" />
          <Route element={<SelectTemplate />} path="/select-template" />
          <Route element={<SelectTemplate />} path="/select-template" />
          
        </Routes>
      </DetailsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
