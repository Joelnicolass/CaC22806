import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes url={"/login"}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<div>404</div>} />
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute url={"/home"}>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
