export const trailers = (state = {}, action) => {
  switch(action.type){
    case 'ADD_TRAILERS':
      return action.trailers;
    default:
      return state;
  }
};
