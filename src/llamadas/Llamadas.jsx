import axios from "axios";
import React, { useEffect, useState } from "react";

/* 

const getUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });


    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    });
  };
  getUsers();

 */

/* 

    arquitectura cliente servidor
    protocolo http -> fetch, axios

    fetch -> api nativa del navegador
    axios -> libreria de terceros -> npm i axios

    rest -> representational state transfer
    api -> application programming interface

    api rest -> api que se comunica a traves de http por medio de los metodos:
    get, post, put, patch, delete

*/

/* const res = await fetch(url);
    const users = await res.json();
    console.log(users); */

const url = "https://jsonplaceholder.typicode.com/users";

const Llamadas = () => {
  const [data, setData] = useState([]); // usuarios cuando la peticion se resuelva
  const [error, setError] = useState(null); // error cuando la peticion se rechace
  const [isLoading, setIsLoading] = useState(false); // estado de la peticion

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError("No se pudo obtener los usuarios");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {data.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            <h5>{user.website}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Llamadas;
