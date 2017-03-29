import React, { Component } from 'react';

const MovieCard = ({ data }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300'
  return (
    <div className="movie-card">
      <p>{data.title}</p>
      <img src={baseURL + data.poster_path}/>
    </div>
  )
}

export default MovieCard;
