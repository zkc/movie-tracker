import { movies } from '../../reducers/movieReducer.js';

const initialState =[]

describe('movie reducer', () => {

  it('should return inital state by default', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });
})
