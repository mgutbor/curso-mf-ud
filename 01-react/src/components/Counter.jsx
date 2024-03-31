import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(5);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  const handleSubtractClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleAddClick()}>Add</button>
      <button onClick={() => handleSubtractClick()}>Subtract</button>
    </div>
  );
};

export default Counter;
