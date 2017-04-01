export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies
  }
};

export const addFavs = (favorites) => {
  return {
    type: 'ADD_FAVORTIES',
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

export const signInFailed = (error) => {
  return {
    type: 'SIGN_IN_FAILED',
    error
  }
};
