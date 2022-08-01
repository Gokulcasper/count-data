import React, { useState } from "react";

const Count = () => {
  let [name, setName] = useState(5);
  const incr = () => {
    setName(name + 1);
  };

  const decr = () => {
    if (name > 0) setName(name - 1);
  };

  const reset = () => {
    setName(5);
  };

  return (
    <div>
      <h3>CountDown</h3>
      <button onClick={incr}> Increment </button>

      <p> {name}</p>

      <button onClick={decr}>Decrement </button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
