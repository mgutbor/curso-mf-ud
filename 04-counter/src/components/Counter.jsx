import { useState } from "react";

import Button from "./Button";

import "./Counter.css";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="app-counter-container">
      <h2>Counter: {counter}</h2>
      <Button text="Subtract" buttonEvent={() => setCounter(counter - 1)} />
      <Button text="Add" buttonEvent={() => setCounter(counter + 1)} />
    </div>
  )
}

export default Counter