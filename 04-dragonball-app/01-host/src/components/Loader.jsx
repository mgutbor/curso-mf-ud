import React from "react";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="text-center">
      <div className="lds-spinner bg-gray-300 shadow-md">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
