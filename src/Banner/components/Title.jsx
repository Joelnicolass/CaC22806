import React, { useContext } from "react";
import { BannerContext } from "../context/BannerContext";

const Title = () => {
  const { movie } = useContext(BannerContext);
  const { title } = movie;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
