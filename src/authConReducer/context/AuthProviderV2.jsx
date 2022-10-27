import React, { useReducer } from "react";
import { useContext } from "react";
import { authReducer, initialState } from "../reducers/authReducer";
import { AuthContextV2 } from "./AuthContextV2";

const AuthProviderV2 = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContextV2.Provider
      value={{
        isAuth: state.isAuth,
        user: state.user,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </AuthContextV2.Provider>
  );
};

export default AuthProviderV2;
