import thunk from 'redux-thunk';

export const refreshFavorites = (userID) => {
  return (dispatch, getState) => {
    //check if the lengthhas changed?
    console.log(getState())
    fetch(`http://localhost:3000/api/users/${userID}/favorites`)
    .then(response => {
      console.log('in thunk action promise')
      console.log(response)
      return response.json()
    })
    .then(
      json => {
        // console.log(json)
        const adjustedMovieArray = json.data.map(movie => Object.assign(movie, { id: movie.movie_id }))
        dispatch(addFavs(adjustedMovieArray))
      },
      error => console.log('error with fav api')
    )
  }
}

export const toggleFavMovie = (id) => {
  return (dispach, getState) => {
    consoel.log(getState())
  }
}

export const addFavs = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}

