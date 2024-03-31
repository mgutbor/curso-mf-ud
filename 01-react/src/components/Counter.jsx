import { useState } from "react";

import styled from "@emotion/styled";
import "./Counter.css";

const BtnSubtract = styled.button`
  color: tomato;
  background-color: yellow;

  &:hover {
    color: yellow;
    background-color: tomato;
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(5);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  const handleSubtractClick = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <BtnSubtract onClick={handleSubtractClick}>Subtract</BtnSubtract>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default Counter;
