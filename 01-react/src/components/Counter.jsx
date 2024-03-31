import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button>Add</button>
      <button>Subtract</button>
    </>
  );
};

export default Counter;
