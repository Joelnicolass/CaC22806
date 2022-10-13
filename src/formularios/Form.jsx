import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form);
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={form.email}
      />
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={form.password}
      />
    </div>
  );
};

export default Form;
