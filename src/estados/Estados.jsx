import { useState } from "react";

const Estados = () => {
  /* 
        const [estado, cambiarEstado] = useState(valorInicial)
    */
  const [nombre, setNombre] = useState("");

  const clickHandler = () => {
    setNombre("");
  };

  return (
    <>
      <div>{nombre}</div>
      <button onClick={clickHandler}>cambiar nombre</button>
    </>
  );
};

export default Estados;
