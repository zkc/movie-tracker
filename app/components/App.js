import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer.js';
import MovieIndexContainer from '../containers/MovieIndexContainer';
import LoginContainer from '../containers/LoginContainer.js';
import SingleMovie from './SingleMovie';
import NewUserContainer from '../containers/NewUserContainer.js';
import FavoriteContainer from '../containers/FavoriteContainer.js';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={ MovieIndexContainer }></Route>
        <Route path="/movie/:id" render={ ({ match }) =>  {
          const movie = movies.find(movie => movie.id === parseInt(match.params.id))
          return <SingleMovie movie={movie} />
        }}>
        </Route>
        <Route exact path="/login" component={ LoginContainer }></Route>
        <Route exact path="/new-user" component={ NewUserContainer }></Route>
        <Route exact path="/favorites" component={ FavoriteContainer }></Route>
      </div>
    )
  }
}

// movie display component
// header with login/user info
// search bar - search without or with login -- but it should prompt you to login when you try to favorite something
// login component where you login - sign in button
