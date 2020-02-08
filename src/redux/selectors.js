const sortByTitle = (a, b) => {
  const titleA = a.title.toLowerCase(),
    titleB = b.title.toLowerCase();
  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

export const getFilm = state => {
  return state;
};

export const getFilms = state => {
  return state.films;
};

export const getSearchValue = state => {
  return state.searchValue;
};

export const getFilteredFilms = state => {
  return getFilms(state).filter(film => {
    const searchValue = film.title.toLowerCase();
    return searchValue.indexOf(getSearchValue(state)) !== -1;
  });
};

export const getSortedFilms = state => {
  return getFilteredFilms(state).sort(sortByTitle);
};