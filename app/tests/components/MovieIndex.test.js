import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

import MovieIndex from '../../components/MovieIndex.js';

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
  const mountWrapper = mount(<MovieIndex {...props} />)

  return {
    props,
    wrapper
  }
};

describe('MovieIndex', () => {

  it('should render MovieIndex components', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.movie-container').length).toEqual(1);
  });


  xit('calls componentDidMount', () => {
    const { mountWrapper } = setup()
    sinon.spy(MovieIndex.prototype, 'componentDidMount');
    expect(MovieIndex.prototype.componentDidMount).toHaveProperty('callCount', 1);
    App.prototype.componentDidMount.restore();
});
})
