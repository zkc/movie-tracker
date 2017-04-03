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

const removeFromFavorites = (MovieCard) => {
  const { user, data } = MovieCard

  fetch(`http://localhost:3000/api/users/${user.id}/favorites/${data.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user_id: user.id, movie_id: data.id})
  }).then(response => {
    if(response.ok) {
      console.log('go to favorites')
      // history.push('/favorites')
    }
  })

}


const toggleFav = (MovieCard) => {
  if(MovieCard.user.email) {
    console.log(MovieCard);
    let movie_id = MovieCard.data.id
    if(MovieCard.router.location == '/favorites') {
      Object.assign(MovieCard, {data: {movie_id}})
    }
    if (MovieCard.favorites.find(fav => movie_id === fav.movie_id)) {
      console.log('un-fav me')
      removeFromFavorites(MovieCard)
    } else {
      console.log('fav me')
      addToFavorites(MovieCard)

    }
  } else {
    MovieCard.history.push('/login')
  }

}

const FavButton = (MovieCard) => {
  return (
    <button onClick={() => toggleFav(MovieCard)} >Fav </button>
  )
}


export default FavButton
