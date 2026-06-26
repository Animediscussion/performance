import React, { useCallback, useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  function abc() {}

  useEffect(() => {
    abc();
  }, []);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <ShowCount count={count} increment={increment} />
      <br />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

const ShowCount = React.memo(({ count = 0, increment }) => {
  return (
    <>
      <h1>Here is Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
});

export default Counter;
