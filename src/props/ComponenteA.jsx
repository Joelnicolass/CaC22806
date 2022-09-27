import React, { useState } from "react";
import ComponenteB from "./ComponenteB";

const ComponenteA = () => {
  const [count, setCount] = useState(0);

  const aumentar = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <h1>Componente A</h1>
      <ComponenteB count={count} aumentar={aumentar} />
    </div>
  );
};

export default ComponenteA;
