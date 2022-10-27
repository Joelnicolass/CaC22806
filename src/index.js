import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";
import AuthProviderV2 from "./authConReducer/context/AuthProviderV2";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderV2>
    <App />
  </AuthProviderV2>
);
