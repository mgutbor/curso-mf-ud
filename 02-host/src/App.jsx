import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "navbar/Navbar";
import Counter from "counter/Counter";

const App = () => (
  <>
    <Navbar />
    <h1>Host Component</h1>
    <Counter />
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
