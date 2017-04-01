export const favorites = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVORTIES':
      return action.favorites;
    default:
      return state;
  }
};
