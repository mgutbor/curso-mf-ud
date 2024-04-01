import { useState } from "react";

import Button from "./Button";

import "./Counter.css";
import styled from "@emotion/styled";

const Success = styled.span`
  color: lime;
`;

const Error = styled.span`
  color: red;
`;

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="app-counter-container">
      <h2>
        Counter: {counter < 0 ? <Error>{counter}</Error> : <Success>{counter}</Success>}</h2>
      <Button text="Subtract" buttonEvent={() => setCounter(counter - 1)} />
      <Button text="Add" buttonEvent={() => setCounter(counter + 1)} />
    </div>
  )
}

export default Counter