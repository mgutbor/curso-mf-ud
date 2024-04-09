import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PersonajesPage from "./Pages/PersonajesPage";
import AboutPage from "./Pages/AboutPage";


import "./index.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path="/personajes" element={<PersonajesPage />} />
    </Routes>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
