import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ searchValue, handleChangeValue }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">Star wars</NavLink>
      </div>
      <form className="header__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChangeValue}
        ></input>
      </form>
    </div>
  );
};

export default Header;
