import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import Login from "../login/Login";
import ProtectedRoutes from "./ProtectedRoutes";

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
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
