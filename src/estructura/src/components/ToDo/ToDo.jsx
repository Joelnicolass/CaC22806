import React, { useState } from "react";
import { todoForm } from "./helpers/todoForm";
import useForm from "../../hooks/useForm";
import { useNavigate, Link, NavLink } from "react-router-dom";

import styles from "./ToDo.module.css";

const ToDo = () => {
  const navigate = useNavigate();

  const { form, handleChange, handleSubmit } = useForm(todoForm);
  const [tareas, setTareas] = useState([]);

  const crearTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      titulo: form.titulo,
      descripcion: form.descripcion,
      completada: false,
    };
    return nuevaTarea;
  };

  const agregarTarea = () => {
    const nuevaTarea = crearTarea();
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    const listaFiltrada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(listaFiltrada);
  };

  const completarTarea = (id) => {
    const listaFiltrada = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(listaFiltrada);
  };

  return (
    <div>
      <Link to="/props">props</Link>
      <button
        onClick={() => {
          navigate("/props");
        }}
      >
        ir a props
      </button>
      <form
        onSubmit={(e) => {
          handleSubmit(e, agregarTarea);
        }}
      >
        <input
          type="text"
          name="titulo"
          onChange={handleChange}
          value={form.titulo}
        />
        <input
          type="text"
          name="descripcion"
          onChange={handleChange}
          value={form.descripcion}
        />
        <button type="submit">Agregar tarea</button>
      </form>

      <div>
        {tareas.map((tarea) => {
          return (
            <div>
              <h3>{tarea.titulo}</h3>
              <h4>{tarea.descripcion}</h4>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => completarTarea(tarea.id)}
              />
              <button
                onClick={() => {
                  eliminarTarea(tarea.id);
                }}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
