import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppContainer from '../../containers/AppContainer.js';
import App from '../../components/App.js';

const store = configureMockStore()({
  movies: [],
  favorites: [],
  user: {
    id: 1,
    name: 'Charlie',
    email: '123@gmail.com'
  }
});

const setup = () => {
  const Container = mount(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
  );
  const Component = Container.find(App);
  return {
    Container,
    Component
  }
};


// describe('AppContainer', () => {
//   const { Container, Component } = setup();
//
//   xit('should pass props from state', () => {
//     expect(Component.props()).toBe({})
//   });
// });
