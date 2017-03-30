import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
  const { id, title, poster_path } = data
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  return (
    <Link to={`/movie/${id}`}>
      <img src={baseURL + poster_path}/>
    </Link>
  )
}

export default MovieCard;
