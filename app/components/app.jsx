import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import MovieIndexContainer from '../containers/MovieIndexContainer';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <MovieIndexContainer />
      </div>
    )
  }
}

// movie display component
// header with login/user info
// search bar - search without or with login -- but it should prompt you to login when you try to favorite something
// login component where you login - sign in button
