import React from 'react';
import MovieCard from './MovieCard';
import FavButtonContainer from '../containers/FavButtonContainer'


const SingleMovie = ({ movie, removeFav, user, history, trailers }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  let { poster_path, title, overview, release_date, vote_average, id} = movie;

  return (
    <article className="movie-details">
      <div className="movie-display">
      <img className="single-movie-poster" src={baseURL + poster_path}/>
      <iframe className="movie-trailer" src={`https://www.youtube.com/embed/${trailers.key}`} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="movie-info">
      <h3>{ title }</h3>
      <p>{ overview }</p>
      <p>Release date: { release_date }</p>
      <p>Rating: { vote_average } / 10</p>
      <FavButtonContainer className="single-fav" user_id={user.id} movie_id={id}/>
      </div>
    </article>
  )
};

export default SingleMovie;
