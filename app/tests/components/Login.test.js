import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock';
import browserHistory from 'react-router';

import Login from '../../components/Login.js';

describe('Login Component', () => {

  const mockUser = {
    name: 'Charlie',
    id: 1,
    email: 'test@example.com'
  }

  const LoginComponent = shallow(
    <Login user={mockUser} signIn={jest.fn()}/>
  )

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it.only('should display an error authentication fails', async (done) => {
    fetchMock.post('http://localhost:3000/api/users', { status: 500, body: {} });

    let emailInput = LoginComponent.find('.email');
    let passwordInput = LoginComponent.find('.password');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'abc@123.com'
      }
    });

    LoginComponent.find('.sign-in-btn').simulate('click');
    await LoginComponent.update();

    let expectedError = 'Invalid Credentials';
    let errorMessage = LoginComponent.find('.errorMessage');

    expect(LoginComponent.state().error).toEqual(expectedError);
    done()

  });

})
