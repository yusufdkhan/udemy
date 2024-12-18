import React from "react";

const Hero = ({ hero }) => {
  // console.log(hero[0], "heroo");
  return (
    <div className="hero-div">
      {/* <img src={hero?.carousel[0]} alt="heroimg" /> */}
      {/* <img src={hero?.carousel[0]} alt="heroimg" /> */}
      <h2 className="hero-heading">{hero?.courseList?.heading}</h2>
      <p className="hero-desc">{hero?.courseList?.desc}</p>
    </div>
  );
};

export default Hero;
