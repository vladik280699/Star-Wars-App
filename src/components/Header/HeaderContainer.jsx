import React from "react";
import { connect } from "react-redux";
import { getSearchValue } from "../../redux/selectors";
import { setSearchValue } from "../../redux/films-reducer";
import Header from "./Header";

const HeaderContainer = ({ searchValue, setSearchValue }) => {
  const handleChangeValue = e => {
    setSearchValue(e.target.value.toLowerCase());
  };
  return (
    <Header searchValue={searchValue} handleChangeValue={handleChangeValue} />
  );
};
const mapStateToProps = state => {
  return {
    searchValue: getSearchValue(state)
  };
};

export default connect(mapStateToProps, { setSearchValue })(HeaderContainer);
