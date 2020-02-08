import React from "react";
import "./FilmsList.scss";
import Film from "../Film/Film";
import { NavLink } from "react-router-dom";

const FilmsList = ({ films, setUrlFilm }) => {
  return (
    <div className="films">
      {films.map(f => (
        <NavLink
          key={f.episode_id}
          onClick={() => {
            setUrlFilm(f.url);
          }}
          to={`/film?id=${f.episode_id}`}
        >
          <Film
            key={f.episode_id}
            name={f.title}
            description={f.opening_crawl}
            releaseDate={f.release_date}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default FilmsList;
