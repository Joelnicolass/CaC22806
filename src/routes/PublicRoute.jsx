import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextV2 } from "../authConReducer/context/AuthContextV2";

const PublicRoute = ({ children, url }) => {
  const { isAuth } = useContext(AuthContextV2);

  if (isAuth) {
    return <Navigate to={url} />;
  }

  return children;
};

export default PublicRoute;
