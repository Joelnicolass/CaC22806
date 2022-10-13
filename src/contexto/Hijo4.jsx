import React, { useContext } from "react";
import { ContextoComision } from "./ContextoComision";

const Hijo4 = () => {
  const { numero, cambiarDato } = useContext(ContextoComision);
  return (
    <>
      <h1>4</h1>
      <h4>Comision {numero}</h4>
      <button
        onClick={() => {
          cambiarDato("La mejor comision");
        }}
      >
        cambiar dato
      </button>
    </>
  );
};

export default Hijo4;
