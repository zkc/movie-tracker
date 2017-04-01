export const favorites = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVORTIES':
      return action.favorites;
    case 'REMOVE_FAVORTIES':
      return state.filter(movie => movie.movie_id != action.movie_id)
    default:
      return state;
  }

};
