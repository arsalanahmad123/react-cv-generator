import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./screens/Wrapper.jsx";
import FinalPage from "./screens/FinalPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Wrapper />} path="/cv-generating/*" />
        <Route element={<FinalPage />} path="/summary" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
