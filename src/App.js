import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import FilmsListContainer from './components/FilmsList/FilmsListContainer';
import {Route, BrowserRouter } from 'react-router-dom';
import FilmInfoContainer from './components/FilmInfo/FilmInfoContainer';

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <Route exact path="/" render={() => <FilmsListContainer />} />
      <Route path="/film/" render={() => <FilmInfoContainer />} />
    </BrowserRouter>
  );
}


export default App;
