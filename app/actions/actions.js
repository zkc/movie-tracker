export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies
  }
};

export const addFavs = (favorites) => {
  return {
    type: 'ADD_FAVORITES',
    favorites
  }
}

export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
};

// export const removeFav = (movie_id) => {
//   return {
//     type: 'REMOVE_FAVORTIES',
//     movie_id
//   }
// };

export const signInFailed = (error) => {
  return {
    type: 'SIGN_IN_FAILED',
    error
  }
};

export const addTrailers = (trailers) => {
  return {
    type: 'ADD_TRAILERS',
    trailers
  }
}
