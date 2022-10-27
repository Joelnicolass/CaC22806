import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { AuthContextV2 } from "../authConReducer/context/AuthContextV2";
import { useAuth } from "../authConReducer/context/AuthProviderV2";
import { TYPES } from "../authConReducer/reducers/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContextV2);

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

    const data = {
      user: {
        username: "Nico",
        email: email,
      },
      token: "12gdfg34567dfgdf890",
    };

    //si todo sale bien, se ejecuta el dispatch
    dispatch({ type: TYPES.LOGIN, payload: data });

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
