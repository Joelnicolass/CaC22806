import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { AuthContextV2 } from "../authConReducer/context/AuthContextV2";

const Home = () => {
  const {} = useContext(AuthContextV2);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
