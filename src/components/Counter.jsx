import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <ShowCount count={count} />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const ShowCount = ({ count = 0 }) => {
  return <h1>Count: {count}</h1>;
};

export default Counter;
