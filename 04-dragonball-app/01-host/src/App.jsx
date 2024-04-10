import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage";

import Navbar from "mf_navbar/Navbar";

import Loader from "./components/Loader";

import "./index.scss";

const HomePage = lazy(() => import("./Pages/HomePage"));
const PersonajesPage = lazy(() => import("./Pages/PersonajesPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const DetallePersonajePage = lazy(() => import("./Pages/DetallePersonajePage"));

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Suspense fallback={<Loader />}><HomePage /></Suspense>} />
      <Route path="/personajes" element={<Suspense fallback={<Loader />}><PersonajesPage /></Suspense>} />
      <Route path="/personajes/:id" element={<Suspense fallback={<Loader />}><DetallePersonajePage /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
