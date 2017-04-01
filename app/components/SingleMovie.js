import React from 'react';
import MovieCard from './MovieCard';
import { Route } from 'react-router-dom';

const removeFromMrElephant = (user_id, movie_id, history) => {
  fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user_id, movie_id})
  }).then(response => {
    if(response.ok) {
      console.log(response)
      history.push('/favorites')
    }
  })
}

const SingleMovie = ({ movie, removeFav, user, history}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const { poster_path, title, overview, release_date, vote_average, movie_id} = movie;
    return (
      <article>
        <img src={baseURL + poster_path}/>
        <div className="movie-info">
          <h3>{ title }</h3>
          <p>{ overview }</p>
          <p>Release date: { release_date }</p>
          <p>Rating: { vote_average } / 10</p>
          <button onClick={ () => removeFromMrElephant(user.id, movie_id, history) }>Remove Favorite</button>
        </div>
      </article>
    )


}

export default SingleMovie;
