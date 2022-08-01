import React, { useState } from "react";

const Count = () => {
  let [name, setName] = useState(5);
  return (
    <div>
      <h3>CountDown</h3>
      <button onClick={() => setName(name + 1)}> Increment </button>{" "}
      <p> {name}</p>{" "}
      <button onClick={() => name > 0 && setName(name - 1)}>Decrement </button>{" "}
      <br /> <br />
      <button onClick={() => setName(5)}>Reset</button>
    </div>
  );
};
export default Count;
