import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import NewUser from '../../components/NewUser.js';

describe('NewUser', () => {

  const mockUser = {
    data: {
      name: 'Charlie',
      id: 1,
      email: 'test@example.com'
    }
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it('should display an error if no email address is added', async (done) => {
    fetchMock.post(`http://localhost:3000/api/users/new`, { status: 500, body: {} })

    const wrapper = shallow(<NewUser user={mockUser.data} signIn={jest.fn()} />)

    const button = wrapper.find('button')

    button.simulate('click')
    await wrapper.update()

    expect(wrapper.state().error).toBe('Email has already been used')

    done();
  });

  it('should create a new account on successful login', async (done) => {

    fetchMock.post(`http://localhost:3000/api/users/new`, {
      status: 200,
      ok: true,
      body: mockUser.data });

    const wrapper = shallow(<NewUser user={mockUser.data} signIn={jest.fn()} />)

    const button = wrapper.find('.sign-in-btn');

    button.simulate('click');
    await wrapper.update();

    expect(fetchMock.calls().matched.length).toEqual(1);
    done();
  });
});
