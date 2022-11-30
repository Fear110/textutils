import React, { useState } from 'react';

export default function Calc() {
  const addhere = () => {
    setAdd(add + 1);
  };
  const subhere = () => {
    if (add === 0) {
      setAdd(0);
    } else {
      setAdd(add - 1);
    }
  };
  const [add, setAdd] = useState(0);
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-baseline">
        <button
          className="btn btn-primary mt-5"
          onClick={addhere}>
          +
        </button>
        <p className="exactvalue mt-5 mx-5">{add}</p>
        <button
          className="btn btn-primary mt-5"
          onClick={subhere}>
          -
        </button>
      </div>
    </div>
  );
}
