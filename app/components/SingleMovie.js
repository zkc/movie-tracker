import React from 'react';
import MovieCard from './MovieCard';

  const removeFromMrElephant = (user_id, movie_id, history) => {
    fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user_id, movie_id})
    }).then(response => {
      if(response.ok) {
        history.push('/favorites')
      }
    })
  }


const SingleMovie = ({ movie, removeFav, user, history, trailers }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  let { poster_path, title, overview, release_date, vote_average, movie_id, id} = movie;
  if (movie_id === undefined) {movie_id = id}

  return (
    <article className="movie-details">
      <div className="movie-display">
      <img src={baseURL + poster_path}/>
      <iframe src={`https://www.youtube.com/embed/${trailers.key}`} frameBorder="5" allowFullScreen></iframe>
      </div>
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
