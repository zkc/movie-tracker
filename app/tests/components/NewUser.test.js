import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import NewUser from '../../components/NewUser.js';

describe('NewUser', () => {

  it('should return NewUser Component', async (done) => {
    fetchMock.post(`http://localhost:3000/api/users/new`, { status: 500, body: {} })

    const wrapper = shallow(<NewUser />)

    const button = wrapper.find('button')

    button.simulate('click')

    await wrapper.update()

    expect(wrapper.state().error).toBe('Email has already been used')
    done()
  });
})