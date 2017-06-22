import thunk from 'redux-thunk';

export const addFavs = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}

export const refreshFavorites = (userID) => {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3000/api/users/${userID}/favorites`)
    // in order to test refactor this to not return response.json() -- no need to move it down.
    .then(response => {
      return response.json()//.then( function_below 
    })
    .then(
      json => {
        const adjustedMovieArray = json.data.map(movie => Object.assign(movie, { id: movie.movie_id }))
        dispatch(addFavs(adjustedMovieArray))
      },
      error => console.log('error with fav api')
    )
  }
}

export const toggleFavMovie = (user_id, movie_id) => {
  console.log('toggling movie ' + movie_id + ' for ' + user_id)
  return (dispatch, getState) => {
    dispatch(refreshFavorites(user_id))
    .then(() => {
      const movieInQuestion = getState().favorites.find(movie => movie.id === movie_id)
      movieInQuestion
      ?
      dispatch(removeFromMrElephant(user_id, movie_id))
      :
      dispatch(addToMrElephant(user_id, getState().movies.find(mov => mov.id === movie_id)))
    })
  }
}


////// Non exported section below

const removeFromMrElephant = (user_id, movie_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user_id, movie_id})
    }).then(response => {
      if(response.ok) {
        dispatch(refreshFavorites(user_id))
      } else {
        console.log('error with remove from DB');
      }
    })
  }
};

const addToMrElephant = (user_id, movie) => {
  return (dispatch) => {
    const { id, title, poster_path, release_date, vote_average, overview } = movie
    const movieStuff = { movie_id: id, user_id, title, poster_path, release_date, vote_average, overview }
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieStuff)
    }).then(response => {
      if(response.ok) {
        dispatch(refreshFavorites(user_id))
      } else {
        console.log('error with add to DB');
      }
    })
  }
}

