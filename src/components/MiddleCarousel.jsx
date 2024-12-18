import React from "react";

const MiddleCarousel = ({ middledata }) => {
  //   console.log(middledata, "middle");
  return (
    <div className="middleCarousel-div">
      {middledata?.map((item, i) => {
        return <button className="middleButton" key={i}>{item?.name}</button>;
      })}
    </div>
  );
};

export default MiddleCarousel;
