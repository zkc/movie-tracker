import { favorites } from '../../reducers/favoritesReducer.js';

const initialState = [];

describe('favorites reducer', () => {

  it('should return inital state by default', () => {
    expect(favorites(undefined, {})).toEqual(initialState);
  });

  it('should return movie object when you add a favorite', () => {
    const movieArray = [
      {movie_id: 1},
      {movie_id: 2}
    ];
    const action = {
      type: 'ADD_FAVORITES',
      favorites: movieArray
    }
    const movie = {movie_id:3};

    expect(favorites(undefined, action)).toEqual(movieArray);
  });

  it('should return movie object without that movie when you remove a favorite', () => {
    const movieArray = [
      {movie_id: 1},
      {movie_id: 2}
    ];
    const action = {
      type: 'REMOVE_FAVORTIES',
      movie_id: 2
    }

    expect(favorites(movieArray, action).length).toEqual(1);
  });
});
