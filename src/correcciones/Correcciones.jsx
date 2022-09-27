import React, { useEffect, useState } from "react";

const Correcciones = () => {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(0);

  /* 
    const aumentar = (value) => {
        setIncrementBy(value);
        setCount(count + value);
    };
  */

  const aumentar = (value) => {
    setIncrementBy(value);
  };

  useEffect(() => {
    setCount(count + incrementBy);
  }, [incrementBy]);

  return (
    <div>
      <h1>Correcciones</h1>
      <h3>{count}</h3>
      <h3>se incrementa por {incrementBy}</h3>
      <button
        onClick={() => {
          aumentar(5);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Correcciones;
