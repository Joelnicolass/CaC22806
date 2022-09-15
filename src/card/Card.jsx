import React, { useState } from "react";

const usuario = {
  nombre: "Naomi",
  apellido: "Carrasco",
  edad: "20",
};

const Card = () => {
  const [texto, setTexto] = useState();
  const [contador, setContador] = useState(0);

  const cambiarDatos = () => {
    setContador(contador + 1);

    if (contador == 3) {
      setContador(0);
      return;
    }

    if (contador == 0) {
      setTexto(usuario.nombre);
      return;
    }

    if (contador == 1) {
      setTexto(usuario.apellido);
      return;
    }

    if (contador == 2) {
      setTexto(usuario.edad);
      return;
    }
  };

  return (
    <>
      <h3>{texto}</h3>
      <button onClick={cambiarDatos}>nombre, apellido, edad</button>
    </>
  );
};

export default Card;
