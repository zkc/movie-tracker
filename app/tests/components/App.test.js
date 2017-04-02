import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';


import App from '../../components/App.js';
import HeaderContainer from '../../containers/HeaderContainer.js';


describe('App', () => {
  const wrapper = shallow(<App />)

  it('should return App Component with 1 HeaderContainer', () => {
    expect(wrapper.find(HeaderContainer).length).toBe(1)
  });

  it('should return App Component with 6 Routes', () => {
    expect(wrapper.find('Route').length).toBe(6)
  });
});
