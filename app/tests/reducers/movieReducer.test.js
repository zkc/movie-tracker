import { movies } from '../../reducers/movieReducer.js';

const initialState =[]

describe('movie reducer', () => {

  it('should return inital state by default', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  it('should add movie object to state', () => {
    const moviesArray = [{}]
    const action = {
      type: 'ADD_MOVIES',
      movies: moviesArray
    }
    expect(movies(initialState, action)).toEqual(moviesArray);
  });
})
