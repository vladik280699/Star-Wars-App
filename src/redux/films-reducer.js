const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
const SET_FILMS = "SET_FILMS";

export const initialState = {
  films: [],
  searchValue: ""
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        films: action.films
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value
      };
    default:
      return state;
  }
};

export const setFilms = films => {
  return { type: SET_FILMS, films };
};
export const setSearchValue = value => {
  return { type: SET_SEARCH_VALUE, value };
};

export default filmsReducer;
