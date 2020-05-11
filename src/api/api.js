import * as axios from "axios";

const baseAPI = 'https://swapi.dev/api/';

const getItem = (url) => axios.get(url)
    .then(res => res.data);

export const filmsAPI = {
  getFilms: () => axios.get(`${baseAPI}films/`)
    .then(res => res.data.results),
    
  getFilm:(url) => getItem(url),
}

export const peopleAPI = {
  getPerson:(url) => getItem(url),
}

export const planetsAPI = {
  getPlanet:(url) => getItem(url),
}
export const starshipsAPI = {
  getStarship:(url) => getItem(url),
}