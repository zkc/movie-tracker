import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'

import MovieCard from '../../components/MovieCard.js';

function setup() {
  const props = {
    user: {
      name: 'Charlie',
      id: 1,
      email: '123@gmail.com'
    },
    data: {},
    movies:[
      {
        id: 1,
        movie_id: 1,
        poster_path: '',
        release_date: '',
        title: 'Beauty and the Beast',
        vote_average: '',
        overview: ''
      }
    ],
    history: {},
    favorites: [],
    router: {
      location: {
        pathname: '/'
      }
    }
  };

  const wrapper = shallow(<MovieCard {...props} />)

  return {
    props,
    wrapper
  }
};

describe('MovieCard', () => {

  it('should render MovieCard components', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.movie-card').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(2);
    expect(wrapper.find('button').length).toEqual(1);
  });

  xit('Adds a movie when clicked', () => {
    const { wrapper } = setup()

    const mockState =  {
      user_id: 1,
      id: 1,
      movie_id: 1,
      poster_path: '',
      release_date: '',
      title: 'Beauty and the Beast',
      vote_average: '',
      overview: ''
    };


    wrapper.find('.add-favorite').simulate('click');
    expect(wrapper.state('favorites')).toEqual(mockState)
    expect(wrapper.state('favorites').length).toEqual(1)
  });
})
