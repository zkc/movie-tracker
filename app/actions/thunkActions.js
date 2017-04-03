import thunk from 'redux-thunk';

export const refreshFavorites = (userID) => {
  return (dispatch) => {
    //check if the lengthhas changed?
    fetch(`http://localhost:3000/api/users/${userID}/favorites`)
    .then(response => {
      console.log('in thunk action promise')
      console.log(response)
      return response.json()
    })
    .then(
      json => dispatch(addFavs(json.data)),
      error => console.log('error with fav api')
    )
  }
}

export const addFavs = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}

