import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer.js';
import MovieIndexContainer from '../containers/MovieIndexContainer';
import LoginContainer from '../containers/LoginContainer.js';
import SingleMovieContainer from '../containers/SingleMovieContainer.js';
import NewUserContainer from '../containers/NewUserContainer.js';
import FavoriteContainer from '../containers/FavoriteContainer.js';


const App = ({ movies, favorites, history }) => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path="/" component={ MovieIndexContainer }></Route>
      <Route path="/moviecard/:id" render={ ({ match }) =>  {
        const movie = movies.find(movie => movie.id === parseInt(match.params.id))
        return <SingleMovieContainer movie={movie} history={history}  />
      }}>
      </Route>
      <Route exact path="/login" component={ LoginContainer }></Route>
      <Route exact path="/new-user" component={ NewUserContainer }></Route>
      <Route exact path="/favorites" component={ FavoriteContainer }></Route>
    </div>
  )
};


export default App;

// movie display component
// header with login/user info
// search bar - search without or with login -- but it should prompt you to login when you try to favorite something
// login component where you login - sign in button

