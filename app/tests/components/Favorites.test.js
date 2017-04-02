import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import Favorites from '../../components/Favorites.js';

describe('Favorites', () => {


  it.skip('should call api for favs list after mounting', async (done) => {
    fetchMock.get(`http://localhost:3000/api/users/1/favorites`, { status: 200, body: {} })

    const fakeUser = { name:'Super Hans', id:1, email:'re@ct.com'}

    const mockAddFavs = jest.fn()

    const FavsCompo = mount(
      <Favorites
        favorites={[]}
        user={fakeUser}
        addFavs={mockAddFavs}
        history={{}}
        />
    )

    // console.log(mockAddFavs.mock.calls)
    await FavsCompo.update()

    expect(mockAddFavs.mock.calls).toEqual(1)
    // fetchMock.restore()
    done()

  });
})