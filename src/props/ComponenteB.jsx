import React from "react";

const ComponenteB = ({ count, aumentar }) => {
  return (
    <div>
      <h2>Componente B</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          aumentar(5);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default ComponenteB;
