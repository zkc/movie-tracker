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
};


const SingleMovie = ({ movie, removeFav, user, history, trailers }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  let { poster_path, title, overview, release_date, vote_average, movie_id, id} = movie;
  if (movie_id === undefined) {movie_id = id}

  return (
    <article className="movie-details">
      <div className="movie-display">
        <iframe className="movie-trailer" src={`https://www.youtube.com/embed/${trailers.key}`} frameBorder="0" allowFullScreen></iframe>
      </div>
      <h3>{ title }</h3>
      <div className="movie-info">
        <div className="poster">
          <div className="poster-wrap">
            <img className="single-movie-poster" src={baseURL + poster_path}/>
          </div>
          <div className="audience">
            <p className="overview">{ overview }</p>
            <div className="ratings-wrap">
              <div className="ratings">
                <p>Audience Rating</p>
                <div className="icon-wrap">
                  <img className="popcorn-icon" src="../assets/styles/images/popcorn-icon.svg"/>
                  <span> { vote_average } / 10</span>
                </div>
              </div>
              <div className="ratings">
                <p>Release Date</p>
                <div className="icon-wrap">
                  <img className="reel-icon" src="../assets/styles/images/reel-icon.svg" />
                  <span>{ release_date }</span>
                </div>
              </div>
            </div>
            <button className="remove-btn" onClick={ () => removeFromMrElephant(user.id, movie_id, history) }>Remove Favorite</button>
          </div>
        </div>
      </div>
    </article>
  )
};

export default SingleMovie;
