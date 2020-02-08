import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSortedFilms } from "../../redux/selectors";
import { setFilms } from "../../redux/films-reducer";
import { setUrlFilm } from "../../redux/film-reducer";
import FilmsList from "./FilmsList";
import Spinner from "../Spinner/Spinner";
import { filmsAPI } from "../../api/api";

const FilmsListContainer = ({ setFilms, films, setUrlFilm }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    filmsAPI.getFilms().then(films => {
      setFilms(films);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && <FilmsList films={films} setUrlFilm={setUrlFilm} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    films: getSortedFilms(state.films)
  };
};

export default connect(mapStateToProps, { setFilms, setUrlFilm })(
  FilmsListContainer
);
