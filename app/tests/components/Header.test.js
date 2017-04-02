import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header.js';

function setup() {
  const props = {
    user: jest.fn()
  };

  const wrapper = shallow(<Header {...props} />)

  return {
    props,
    wrapper
  }
};

function setUp() {
  const Props = {
    user: {
      name: 'Charlie',
      id: 1,
      email: '123@gmail.com'
    }
  };

  const Wrapper = shallow(<Header {...Props} />)

  return {
    Props,
    Wrapper
  }
};

describe('Header Component', () => {

  it('should render one header, an h1, and 2 NavLinks', () => {
    const { wrapper } = setup()

    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Movie Tracker');
    expect(wrapper.find('NavLink').length).toBe(2)
  });

  it('should render 1 Movie Tracker NavLink when no user is signed in with a path of /', () => {
    const { wrapper } = setup()

    expect(wrapper.find('NavLink').first().props().children.props).toEqual({"children": "Movie Tracker"});
    expect(wrapper.find('NavLink').first().props().to).toEqual('/');
  });

  it('should render 1 Sign In NavLink when no user is signed in with a path of /login', () => {
    const { wrapper } = setup()

    expect(wrapper.find('NavLink').last().props().children[0]).toEqual('Sign In');
    expect(wrapper.find('NavLink').last().props().to).toEqual('/login');
  });

  it('should render 1 Sign Out NavLink when a user is signed in with a path of /', () => {
    const { Wrapper } = setUp()

    expect(Wrapper.find('NavLink').last().props().children).toEqual('Sign Out');
    expect(Wrapper.find('NavLink').last().props().to).toEqual('/');
  });

  it('should render a p tag with the users name when signed in', () => {
    const { Wrapper } = setUp()

    expect(Wrapper.find('p').text()).toEqual('Welcome, Charlie');
    expect(Wrapper.find('NavLink').last().props().to).toEqual('/');
  });

  it('should render a favorites NavLink when signed in', () => {
    const { Wrapper } = setUp()

    expect(Wrapper.find('.favorites-button').props().children).toEqual('Favorites');
    expect(Wrapper.find('.favorites-button').props().to).toEqual('/favorites');
  });
});
