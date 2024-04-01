import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "navbar/Navbar";
import Counter from "counter/Counter";

import "./index.css";

const App = () => (
  <>
    <Navbar />
    <div className="host-container">
      <h2>Counter MF</h2>
      <Counter />
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
