import axios from "axios";
import React, { useEffect, useState } from "react";
import { userAdapter } from "../adapters/users";
import { getUsersService } from "../services/getUsers";
import UserCard from "./UserCard";

const Llamadas2 = () => {
  const [data, setData] = useState([]); // usuarios cuando la peticion se resuelva
  const [error, setError] = useState(null); // error cuando la peticion se rechace
  const [isLoading, setIsLoading] = useState(false); // estado de la peticion

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const data = await getUsersService();
      const users = userAdapter(data);
      setData(users);
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
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            website={user.website}
          />
        );
      })}
    </div>
  );
};

export default Llamadas2;
