import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import SingleMovie from '../../components/SingleMovie.js';


describe('SingleMovie', () => {
  function setup() {
    const props = {
      history: {},
      user: {
        name: 'Charlie',
        id: 1,
        email: '123@gmail.com'
      },

      movie: {
        movie_id: 321612,
        id: 321612,
        title: 'Beauty and the Beast',
        release_date: '2017-03-15',
        vote_average: 7.3,
        overview: 'overview',
        poster_path: '/tnmL0g604PDRJwGJ5fsUSYKFo9.jpg'
      },
      trailers: {}

    };

    const wrapper = shallow(<SingleMovie {...props} />)

    return {
      props,
      wrapper
    }
  };

  it('should render an article, img, iframe, and button ', () => {
    const { wrapper } = setup();

    expect(wrapper.find('article').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('iframe').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render store movie information ', () => {
    const { wrapper } = setup();

    expect(wrapper.find('h3').text()).toBe("Beauty and the Beast");
    expect(wrapper.find('p').first().text()).toBe("overview");
    expect(wrapper.find('button').text()).toBe('Remove Favorite');
  });

});
