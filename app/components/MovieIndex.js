import React, { Component } from 'react';
import MovieCardContainer from '../containers/MovieCardContainer';

export default class MovieIndex extends Component {

  getMovies() {
    // fetch('https://api.themoviedb.org/3/movie/popular?api_key=27e338799cd4f5b4a3f2f72f5ec21881')
    fetch('/api/allMovies')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.props.addMovies(json.results)
      })
  };

  render() {
    const { history } = this.props
    const movies = this.props.movies.map((movie, index) => {
      return <MovieCardContainer history={ history } data={ movie } key={ index }/>
    });
    return (
      <section className="movie-container">
       { movies }
      </section>
    )
  };

  componentDidMount(){
    !this.props.movies.length ? this.getMovies() : null;
  };
};
