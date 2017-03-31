
const initialState = {
  id: null,
  name: null,
  email: ''
}

export const user = (state = initialState, action) => {
  switch(action.type){
    case 'SIGN_IN':
      return Object.assign({}, state, action.user);
    case 'SIGN_OUT':
      return initialState;
    default:
      return state;
  }
};
