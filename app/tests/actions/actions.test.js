import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/actions.js';

const store = configureMockStore()();

const mockUser = {
  id: 1,
  name: "Taylor",
  password: "password",
  email: "tman2272@aol.com"
};

const mockMovie = [{}];

describe('Actions', () => {
  afterEach(()=> store.clearActions());

  it('SIGN_IN', () => {
    let expectedAction = {type: 'SIGN_IN', user: mockUser};

    store.dispatch(actions.signIn(mockUser));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('ADD_MOVIES', () => {
    let expectedAction = {type: 'ADD_MOVIES', movies: mockMovie};

    store.dispatch(actions.addMovies(mockMovie));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('ADD_FAVORITES', () => {
    let expectedAction = {type: 'ADD_FAVORITES', favorites: mockMovie};

    store.dispatch(actions.addFavs(mockMovie));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

});
