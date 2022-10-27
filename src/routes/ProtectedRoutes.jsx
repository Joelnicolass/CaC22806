import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextV2 } from "../authConReducer/context/AuthContextV2";

const ProtectedRoutes = ({ children, url }) => {
  const { isAuth } = useContext(AuthContextV2);

  if (isAuth) {
    return children;
  }

  return <Navigate to={url} />;
};

export default ProtectedRoutes;
