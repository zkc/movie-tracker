import { user } from '../../reducers/loginReducer.js';

const initialState = {
  id: null,
  name: null,
  email: ''
}

describe('login reducer', () => {

  it('should return inital state by default', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('SIGN_IN', () => {
    const mockUser = {id: 2, name: 'Charlie', email: '123@gmail.com'};
    const mockAction = {
      type: 'SIGN_IN',
      user: mockUser
    }

    expect(user(initialState, mockAction)).toEqual(mockUser);
  });
});
