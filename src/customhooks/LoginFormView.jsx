import React from "react";

const LoginFormView = ({ data, handleChange, handleSubmit, sendForm }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(sendForm);
      }}
    >
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginFormView;
