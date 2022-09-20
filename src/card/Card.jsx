import React, { useState } from "react";
import { useEffect } from "react";

const usuario = {
  nombre: "Naomi",
  apellido: "Carrasco",
  edad: "20",
};

const usuarioClaves = Object.keys(usuario);
let indice = 0;

const Card = () => {
  const [texto, setTexto] = useState(usuario[usuarioClaves[indice]]);

  const cambiarDatos = () => {
    indice === usuarioClaves.length - 1 ? (indice = 0) : indice++;
    setTexto(usuario[usuarioClaves[indice]]);
  };

  useEffect(() => {
    setTimeout(() => {
      cambiarDatos();
    }, 1000);
  }, [texto]);

  return (
    <>
      <h3>{texto}</h3>
      {/* <button onClick={cambiarDatos}>{usuarioClaves[indice + 1]}</button> */}
    </>
  );
};

export default Card;
