import React, { useState } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
    const newList = [];
    for (let i = 0; i < 1000; i++) {
      console.log(i);
      newList.push(e.target.value);
    }
    setList(newList);
  };
  return (
    <div>
      <h1>List</h1>
      <input type="text" value={input} onChange={(e) => handleInput(e)} />
      {/* <div>List is loaded or building</div> */}
      {list?.map((item, idx) => {
        return <div key={idx}> {`${item}: ${idx}`}</div>;
      })}
    </div>
  );
};

export default List;
