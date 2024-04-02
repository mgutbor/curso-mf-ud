import { useState } from "react";

export const useColors = () => {
  const [color, setColor] = useState("#000000");
  const [colorsList, setColorslist] = useState([]);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();

    const copyColorsList = [color, ...colorsList];
    setColorslist(copyColorsList);
  };
  
  return {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor
  }
}