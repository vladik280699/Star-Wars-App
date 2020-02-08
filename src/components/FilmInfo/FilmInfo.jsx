import React from 'react';
import './FilmInfo.scss';

const FilmInfo = ({title, director, producer, releaseDate, description, characters, planets, starships}) => {
  return (
    <div>
        <div className="film-info">
          <div className="film-info__title">
            <h1>{title}</h1>
          </div>
          <div className="film-info__information">
            <span><b>director: </b>{director}</span>
            <span><b>producer: </b>{producer}</span>
            <span><b>releaseDate: </b>{releaseDate}</span>
          </div>
          <div className="film-info__description">
            <span>{description}</span>
          </div>
          <div className="film-info__planets">
            planets:
            <ul>
              {planets.map(p => (<li>{p}</li>))}
            </ul>
          </div>
          <div className="film-info__planets">
            people:
            <ul>
              {characters.map(p => (<li>{p}</li>))}
            </ul>
          </div>
          <div className="film-info__planets">
            starships:
            <ul>
              {starships.map(p => (<li>{p}</li>))}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default FilmInfo;