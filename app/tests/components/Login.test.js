import React from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock';

import Login from '../../components/Login.js';

describe('Login Component', () => {

  const mockUser = {
    data: {
      name: 'Charlie',
      id: 1,
      email: 'test@example.com'
    }
  }

  const LoginComponent = shallow(
    <Login user={mockUser.data} signIn={jest.fn()} />
  )

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it('should display an error authentication fails', async (done) => {
    fetchMock.post('http://localhost:3000/api/users', { status: 500, body: {} });

    let emailInput = LoginComponent.find('.email');
    let passwordInput = LoginComponent.find('.password');
    let signInBtn = LoginComponent.find('.sign-in-btn');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'abc@123.com'
      }
    });

    signInBtn.simulate('click');
    await LoginComponent.update();

    let expectedError = 'Invalid Credentials';
    let errorMessage = LoginComponent.find('.errorMessage');

    expect(LoginComponent.state().error).toEqual(expectedError);
    expect(LoginComponent.find('.errorMessage').length).toEqual(1);
    expect(LoginComponent.find('.errorMessage').text()).toEqual(expectedError);

    done();

  });

  it ('should redirect to homepage after successful login', async (done) => {
    fetchMock.post('http://localhost:3000/api/users', {
      status: 200,
      ok: true,
      body: mockUser
    });

    let emailInput = LoginComponent.find('.email');
    let signInBtn = LoginComponent.find('.sign-in-btn');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'abc@123.com'
      }
    })

    signInBtn.simulate('click');
    await LoginComponent.update();

    expect(fetchMock.calls().matched.length).toEqual(1);

    done();

  });

});
