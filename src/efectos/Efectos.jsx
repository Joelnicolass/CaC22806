import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";

/* 

    useEffect(
        ()=>{}, []
    )


    useEffect(() => {});  -> esta no la hagan

    useEffect(() => {}, []); -> solo se ejecuta una vez, cuando el componente se monta

    useEffect(() => {}, [a, b, c]); -> se ejecuta cuando el componente se monta y cuando a, b o c cambian
  

    estructura completa
    useEffect(() => {
        return () => {};
    }, []);



*/

const Efectos = () => {
  //////////////////////////////////
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };
  /////////////////////////////////

  useEffect(() => {}, []);

  return (
    <>
      <div>Efectos</div>
      <h2>{contador}</h2>
      <button onClick={aumentar}>+</button>
    </>
  );
};

export default Efectos;
