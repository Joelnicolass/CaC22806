import React, { useContext } from "react";
import { ContextoComision } from "./ContextoComision";
import Hijo3 from "./Hijo3";

const Hijo2 = () => {
  const { numero } = useContext(ContextoComision);
  return (
    <>
      <h1>2</h1>
      <h4>Comision {numero}</h4>
      <Hijo3 />
    </>
  );
};

export default Hijo2;
