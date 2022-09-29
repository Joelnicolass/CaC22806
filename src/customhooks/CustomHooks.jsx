import React, { useState } from "react";
import { loginForm } from "./form";
import LoginFormView from "./LoginFormView";
import useForm from "./useForm";

const CustomHooks = () => {
  const { data, handleChange, handleSubmit } = useForm(loginForm);

  const sendForm = () => {
    console.log(data);
  };

  return (
    <div>
      <LoginFormView
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        sendForm={sendForm}
      />
    </div>
  );
};

export default CustomHooks;
