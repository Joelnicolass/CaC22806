import React, { useState } from "react";
import { ContextoComision } from "./ContextoComision";
import Hijo1 from "./Hijo1";
import Hijo4 from "./Hijo4";

const Contexto = () => {
  const [comision, setComision] = useState("22806");
  const [dato, setDato] = useState("");

  return (
    <>
      <ContextoComision.Provider
        value={{
          numero: comision,
          cambiarDato: setDato,
          dato,
        }}
      >
        <h1>Contexto</h1>
        <Hijo1 />
        <Hijo4 />
      </ContextoComision.Provider>
    </>
  );
};

export default Contexto;

/* 
    estados - useState
    efectos - useEffect
    -------------------------
    contextos - useContext
    reducers - useReducer
    -------------------------
    
    hooks de optimizacion

    memo
    useMemo
    useCallback

    -------------------------
    useRef
    useLayoutEffect
*/
