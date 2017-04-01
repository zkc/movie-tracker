export const favorites = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVORTIES':
      console.log(state);
      console.log(action.favorites)
      const filterFavs = action.favorites.map((fav) => {
        fav.id
      })

      return action.favorites;
    default:
      return state;
  }
};
