import { peopleAPI, planetsAPI, starshipsAPI } from "../api/api";

const SET_FILM = "SET_FILM";
const SET_PLANETS = "SET_PLANETS";
const SET_PEOPLE = "SET_PEOPLE";
const SET_STARSHIPS = "SET_STARSHIPS";
const SET_URL = "SET_URL";

export const initialState = {
  title: "",
  id: 0,
  description: "",
  director: "",
  producer: "",
  releaseDate: 0,
  characters: [],
  planets: [],
  starships: [],
  url: ""
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      return {
        ...state,
        title: action.film.title,
        id: action.film.episode_id,
        description: action.film.opening_crawl,
        director: action.film.director,
        producer: action.film.producer,
        releaseDate: action.film.release_date,
        characters: action.film.characters,
        planets: action.film.planets,
        starships: action.film.starships
      };
    case SET_PLANETS:
      return {
        ...state,
        planets: action.planets.map(p => p.name)
      };
    case SET_PEOPLE:
      return {
        ...state,
        characters: action.people.map(p => p.name)
      };
    case SET_STARSHIPS:
      return {
        ...state,
        starships: action.starships.map(p => p.name)
      };
    case SET_URL:
      return {
        ...state,
        url: action.url
      };
    default:
      return state;
  }
};

export const setFilm = film => {
  return { type: SET_FILM, film };
};
export const setUrlFilm = url => {
  return { type: SET_URL, url };
};
export const setPlanets = planets => {
  return { type: SET_PLANETS, planets };
};
export const setPeople = people => {
  return { type: SET_PEOPLE, people };
};
export const setStarships = starships => {
  return { type: SET_STARSHIPS, starships };
};

export const getPlanets = planets => async dispatch => {
  const value = await Promise.all(
    planets.map(p => {
      return planetsAPI.getPlanet(p);
    })
  );

  dispatch(setPlanets(value));
};

export const getPeople = people => async dispatch => {
  const value = await Promise.all(
    people.map(p => {
      return peopleAPI.getPerson(p);
    })
  );

  dispatch(setPeople(value));
};
export const getStarships = starships => async dispatch => {
  const value = await Promise.all(
    starships.map(p => {
      return starshipsAPI.getStarship(p);
    })
  );

  dispatch(setStarships(value));
};

export default filmReducer;