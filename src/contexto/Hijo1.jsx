import React, { useContext } from "react";
import { ContextoComision } from "./ContextoComision";
import Hijo2 from "./Hijo2";

const Hijo1 = () => {
  const { numero, dato } = useContext(ContextoComision);

  console.log(numero, dato);

  return (
    <>
      <h1>1</h1>
      <h4>Comision {numero}</h4>
      <h4>{dato}</h4>
      <Hijo2 />
    </>
  );
};

export default Hijo1;
