import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=27e338799cd4f5b4a3f2f72f5ec21881')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.props.addMovies(json.results)
      })
  };

  render() {
    const movies = this.props.movies.map((movie, index) => {
      return <MovieCard data={ movie } key={ index }/>
    });
    return (
      <div>
       { movies }
      </div>
    )
  }
};
