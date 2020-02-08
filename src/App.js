import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import FilmsListContainer from './components/FilmsList/FilmsListContainer';
import {Route, HashRouter } from 'react-router-dom';
import FilmInfoContainer from './components/FilmInfo/FilmInfoContainer';

function App() {
  return (
    <HashRouter basename='/'>
      <HeaderContainer />
      <Route exact path="/" render={() => <FilmsListContainer />} />
      <Route exact path="/film/" render={() => <FilmInfoContainer />} />
    </HashRouter>
  );
}


export default App;
