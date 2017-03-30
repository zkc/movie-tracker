import React from 'react';
import MovieCard from './MovieCard';

const SingleMovie = ({ movie }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, id, overview, release_date, vote_average } = movie;
    return (
      <article>
        <img src={baseURL + poster_path}/>
        <div className="movie-info">
          <h3>{ title }</h3>
          <p>{ overview }</p>
          <p>Release date: { release_date }</p>
          <p>Rating: { vote_average } / 10</p>
        </div>
      </article>
    )


}

export default SingleMovie;
