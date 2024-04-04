import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";

import "./index.scss";

const App = () => (
  <>
    <Navbar />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: 02-mf-navbar</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
