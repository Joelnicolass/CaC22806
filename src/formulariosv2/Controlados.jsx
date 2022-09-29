import axios from "axios";
import React, { useRef, useState } from "react";

const Controlados = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("file", fileRef.current.files[0]);

    /* 

    const url = "";

    axios.post(url, formData);

    fetch(url, {
      method: "POST",
      body: formData,
    }); 
    
    */

    // validaciones

    /* axios.post(url, form);

    fetch(url, {
        method: "POST",
        body: JSON.stringify(form)
    }) */
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <input type="file" ref={fileRef} />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Controlados;
