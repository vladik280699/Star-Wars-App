import React from "react";
import "./Film.scss";

const Film = ({ name, description, releaseDate }) => {
  return (
    <div className="film">
      <div className="film__name">{name}</div>
      <div className="film__description">{description}</div>
      <div className="film__release-date">{releaseDate}</div>
    </div>
  );
};

export default Film;
