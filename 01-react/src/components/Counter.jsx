import { useState } from "react";

import { handleClick } from "../helpers/handleClick";

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

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <BtnSubtract onClick={() => setCounter(handleClick(counter, -1))}>Subtract</BtnSubtract>
      <button onClick={() => setCounter(handleClick(counter, 1))}>Add</button>
    </div>
  );
};

export default Counter;
