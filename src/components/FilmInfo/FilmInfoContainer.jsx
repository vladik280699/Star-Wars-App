import React from "react";
import { connect } from "react-redux";
import { getFilm } from "../../redux/selectors";
import FilmInfo from "./FilmInfo";
import {
  setFilm,
  setPlanets,
  getPlanets,
  getPeople,
  getStarships
} from "../../redux/film-reducer";
import { filmsAPI } from "../../api/api";
import Spinner from "../Spinner/Spinner";

class FilmInfoContainer extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    filmsAPI
      .getFilm(this.props.film.url)
      .then(film => {
        this.props.setFilm(film);
      })
      .then(async () => {
        await this.props.getPlanets(this.props.film.planets);
      })
      .then(async () => {
        await this.props.getPeople(this.props.film.characters);
      })
      .then(async () => {
        await this.props.getStarships(this.props.film.starships);
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading } = this.state;
    const {film} = this.props;

    return (
      <div>
        {isLoading && <Spinner />}
        {!isLoading && <FilmInfo {...film} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    film: getFilm(state.film)
  };
};

export default connect(mapStateToProps, {
  setFilm,
  setPlanets,
  getPlanets,
  getPeople,
  getStarships
})(FilmInfoContainer);