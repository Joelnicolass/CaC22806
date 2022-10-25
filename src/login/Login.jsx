import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser: setUsername, setIsAuth } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = user;
    const userLogged = {
      id: Date.now(),
      token: "123456",
      username: email,
    };

    setUsername(userLogged);
    setIsAuth(true);

    navigate("/home", {
      replace: true,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
