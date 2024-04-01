import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "ColorPicker/ColorPicker";

import "./index.css";

const App = () => (
  <div className="container">
    <ColorPicker />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
