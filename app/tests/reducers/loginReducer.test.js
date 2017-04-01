import { user } from '../../reducers/loginReducer.js';

const initialState = {}

describe('login reducer', () => {

  it('should return inital state by default', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });
})
