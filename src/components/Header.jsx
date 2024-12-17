import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Header = ({ header }) => {
  console.log(header?.links[0]?.name, "headerdata");

  return (
    <div className="main-div">
      <img src={header?.logo} width={100} />

      <span>{header?.links[0]?.name}</span>

      <div className="search-div">
        <CiSearch className="svg" />
        <input className="input" placeholder="search anything" />
      </div>

      <ul className="explore-section">
        {header?.links.slice(1).map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
      <div className="cart-div">
        <IoCartOutline className="svg-cart" />
      </div>
      <div className="login-div">
        {header?.userOptions?.map((item) => {
          return <button>{item.name}</button>;
        })}
      </div>
      <div className="globe-div">
        <SlGlobe className="svg-globe" />
      </div>
    </div>
  );
};

export default Header;
