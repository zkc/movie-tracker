xit()
// import { mount } from 'enzyme';
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import FavoriteContainer from '../../containers/FavoriteContainer.js';
// import Favorites from '../../components/Favorites.js';
//
// const store = configureMockStore()({
//   movies: [],
//   favorites: [],
//   user: {
//     id: 1,
//     name: 'Charlie',
//     email: '123@gmail.com'
//   }
// });
//
// const setup = () => {
//   const Container = mount(
//     <Provider store={store}>
//         <FavoriteContainer/>
//     </Provider>
//   );
//   const Component = Container.find(Favorites);
//   return {
//     Container,
//     Component
//   }
// };
//
// describe('FavoriteContainer', () => {
//   const { Container, Component } = setup();
//
//   xit('should pass props from state', () => {
//     expect(Component.props().favorites).toBe([])
//   });
//
//
//   xit('should pass correct actionCreators as props', () => {
//     expect(Object.keys(Component.props())).toContain(
//       'addFavs'
//     );
//   });
// });
