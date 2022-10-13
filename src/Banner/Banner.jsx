import React from "react";
import AgeRating from "./components/AgeRating";
import Buttons from "./components/Buttons";
import Description from "./components/Description";
import MediaItem from "./components/MediaItem";
import Title from "./components/Title";
import TopPosition from "./components/TopPosition";
import BannerProvider from "./context/BannerContext";

const Banner = () => {
  return (
    <BannerProvider>
      <MediaItem />
      <Title />
      <TopPosition />
      <Description />
      <Buttons />
      <AgeRating />
    </BannerProvider>
  );
};

export default Banner;
