import React, { useContext } from "react";
import { ContextoComision } from "./ContextoComision";

const Hijo3 = () => {
  const { numero } = useContext(ContextoComision);
  return (
    <div>
      <h1>3</h1>
      <h4>Comision {numero}</h4>
    </div>
  );
};

export default Hijo3;
