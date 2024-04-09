import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: 02-mf-navbar</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
