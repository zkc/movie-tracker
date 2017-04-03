import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

import MovieIndex from '../../components/MovieIndex.js';

afterEach(() => {
   expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

function setup() {

  const props = {
    movies:[],
    history: {},
    location: {
      pathname: '/'
      },
    match: {}
  };

  const wrapper = shallow(<MovieIndex {...props} />)

  return {
    props,
    wrapper
  }
};

describe('MovieIndex', () => {

  xit('should add movies on API call', async () => {
    const { wrapper } = setup();

    fetchMock.post('https://api.themoviedb.org/3/movie/popular?api_key=27e338799cd4f5b4a3f2f72f5ec21881', { status: 200, body: {} });

    await wrapper.update();

    expect(wrapper.find('.movie-container').length).toEqual(1);
    expect(fetchMock.calls().matched.length).toEqual(1);
  });


  xit('calls componentDidMount', () => {
    const { mountWrapper } = setup()
    sinon.spy(MovieIndex.prototype, 'componentDidMount');
    expect(MovieIndex.prototype.componentDidMount).toHaveProperty('callCount', 1);
    MovieIndex.prototype.componentDidMount.restore();
});
});
