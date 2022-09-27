import React, { useState } from "react";

const Formularios = () => {
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
  };

  return (
    <div>
      <h1>Formularios</h1>
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button>Agregar Tarea</button>

      <div>
        <h2>Lista de Tareas</h2>

        <div>
          <h4>Ir de compras</h4>
          <h5>Comrpar un kilo de pan</h5>
          <button>eliminar</button>
          <button>terminar</button>
        </div>

        <div>
          <h4>Tarea 2</h4>
          <h5></h5>
          <button>eliminar</button>
          <button>terminar</button>
        </div>

        <div>
          <h4>tarea 3</h4>
          <h5></h5>
          <button>eliminar</button>
          <button>terminar</button>
        </div>
      </div>
    </div>
  );
};

export default Formularios;

/* 

const tareas = []

task = {
    id: 1,
    name: string,
    description: string,
    status: boolean
}

tareas.map((tarea)=> {
    return (
        <div>
            <h4>{tarea.name}</h4>
        </div>
    )

})

*/
