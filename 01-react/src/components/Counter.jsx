import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(5);

  const handleAddClick = () => {
    return setCounter(counter + 1);
  };

  const handleSubtractClick = () => {
    return setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleAddClick()}>Add</button>
      <button onClick={() => handleSubtractClick()}>Subtract</button>
    </>
  );
};

export default Counter;
