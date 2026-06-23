import React, { useMemo, useState } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (count) => {
    console.log(count);
    for (let i = 0; i < 100000; i++) {}
    return count * 2 || 0;
  };

  const computedValue = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <div>
      <h1>Computed Value: {computedValue(count)}</h1>
      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => setCount((prevState) => parseInt(prevState) + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default MemoExample;
