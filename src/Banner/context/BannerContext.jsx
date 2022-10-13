import React, { createContext, useState } from "react";

export const BannerContext = createContext();

const BannerProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    img: "",
    type: "movie",
    title: "The Shawshank Redemption",
    description: "Two imprisoned",
    ageRating: "18+",
    topPosition: "1",
  });

  return (
    <BannerContext.Provider
      value={{
        movie,
        setMovie,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;
