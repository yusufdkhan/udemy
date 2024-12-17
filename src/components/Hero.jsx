import React from "react";

const Hero = ({ hero }) => {
  console.log(hero, "heroo");
  return <img src={hero[0]} />;
};

export default Hero;
