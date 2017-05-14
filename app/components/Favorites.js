import React, { Component } from 'react';

import MovieCardContainer from '../containers/MovieCardContainer';

class Favorites extends Component {
  render() {
    const { favorites } = this.props
    return (
      <div className="movie-container">
        {favorites.map((movie, i) => <MovieCardContainer data={movie} key={i} />)}
      </div>
    )
  };
};


export default Favorites;
