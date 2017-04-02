import React, { Component } from 'react';


const addToFavorites = (MovieCard) => {
  const { id, title, poster_path, release_date, vote_average, overview } = MovieCard.data
  const favMovie = { movie_id: id, user_id: MovieCard.user.id, title, poster_path, release_date, vote_average, overview }
  console.log(favMovie)
  fetch('http://localhost:3000/api/users/favorites/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(favMovie)
  }).then(response => {
    if(!response.ok) {
      console.log(response);
      // history.push('/login')
    }
  })
}


const toggleFav = (MovieCard) => {
  if(MovieCard.user.email) {
    // console.log(MovieCard);
    if (MovieCard.favorites.find(fav => MovieCard.data.id === fav.movie_id)) {
      console.log('un-fav me')
    } else {
      console.log('fav me')
      addToFavorites(MovieCard)

    }
  } else {
    MovieCard.history.push('/login')
  }

}

const FavButton = (MovieCard) => {
  console.log(MovieCard)
  return (
    <button onClick={() => toggleFav(MovieCard)} >Fav </button>
  )
}


export default FavButton
