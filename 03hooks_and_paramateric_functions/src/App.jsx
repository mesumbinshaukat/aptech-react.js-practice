import React, { useState, useEffect } from "react";

function App() {
  const [currNumb, setCurrNumb] = useState(5);

  const addBtn = () => {
    setCurrNumb(previous => previous + 1);
  }

  const minusBtn = () => {
    setCurrNumb(previous => {
      const newValue = previous - 1;
      return newValue;
    });
  }

  useEffect(() => {
    
  }, [currNumb]);

  return (
    <>
      Current Number: 5 <br />
      Updated Number: {currNumb}
      <br />
      <button onClick={addBtn} type="button">Add</button> <br />
      <button
        onClick={minusBtn}
        type="button"
        disabled={currNumb === 0}
      >
        Minus
      </button>
    </>
  );
}

export default App;
