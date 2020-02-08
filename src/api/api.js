import * as axios from "axios";

const baseAPI = 'https://swapi.co/api/';

const getItem = (url) => {
  return axios.get(url)
    .then(res => { return res.data})
}

export const filmsAPI = {
  getFilms(){
    return axios.get(`${baseAPI}films/`)
    .then(res => { return res.data.results})
        
  },
  getFilm(url){
    return getItem(url);
  }
}

export const peopleAPI = {
  getPerson(url){
    return getItem(url);
  }
}

export const planetsAPI = {
  getPlanet(url){
    return getItem(url);
        
  }
}
export const starshipsAPI = {
  getStarship(url){
    return getItem(url);
        
  }
}