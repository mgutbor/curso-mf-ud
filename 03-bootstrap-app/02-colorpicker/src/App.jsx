import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "./components/ColorPicker";

import "./index.css";

const App = () => (
  <>
    <ColorPicker />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
