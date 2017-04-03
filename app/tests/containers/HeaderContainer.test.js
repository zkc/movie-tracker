xit()
// import { mount } from 'enzyme';
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import HeaderContainer from '../../containers/HeaderContainer.js';
// import Header from '../../components/Header.js';
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
//         <HeaderContainer/>
//     </Provider>
//   );
//   const Component = Container.find(Header);
//   return {
//     Container,
//     Component
//   }
// };
//
// describe('HeaderContainer', () => {
//   const { Container, Component } = setup();
//
//   it('should pass props from state', () => {
//     expect(Component.props()).toBe({})
//   });
//
//
//   it('should pass correct actionCreators as props', () => {
//     expect(Object.keys(Component.props())).toContain(
//       'signOut'
//     );
//   });
// });
