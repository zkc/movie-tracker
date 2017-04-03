xit()

// import { mount, shallow } from 'enzyme';
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
//
// import LoginContainer from '../../containers/LoginContainer.js';
// import Login from '../../components/Login.js';
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
//         <LoginContainer/>
//     </Provider>
//   );
//   const Component = Container.find(Login);
//   return {
//     Container,
//     Component
//   }
// };
//
// describe('LoginContainer', () => {
//   const { Container, Component } = setup();
//
//   it('should pass correct actionCreators as props', () => {
//     expect(Object.keys(Component.props())).toContain(
//       'signIn'
//     );
//   });
// });
