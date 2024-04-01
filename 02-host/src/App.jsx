import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "navbar/Navbar";

const App = () => (
  <>
    <Navbar />
    <h1>Host Component</h1>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
