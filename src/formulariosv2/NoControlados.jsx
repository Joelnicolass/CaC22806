import React, { useRef } from "react";

const NoControlados = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={emailRef} />
      <input type="text" ref={passwordRef} />
      <button onClick={handleSubmit}>Iniciar Sesión</button>
    </div>
  );
};

export default NoControlados;
