import { trailers } from '../../reducers/trailerReducer.js';

const initialState = {}

describe('trailers reducer', () => {

  it('should return inital state by default', () => {
    expect(trailers(undefined, {})).toEqual(initialState);
  });

  it('should add trailer object to state', () => {
    const trailerObject = {}
    const action = {
      type: 'ADD_TRAILERS',
      trailers: trailerObject
    }
    expect(trailers(initialState, action)).toEqual(trailerObject);
  });
})
