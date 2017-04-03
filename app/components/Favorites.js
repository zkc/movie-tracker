import React, { Component } from 'react';

import MovieCardContainer from '../containers/MovieCardContainer';

class Favorites extends Component {

  getAllFavs(id) {
    fetch(`http://localhost:3000/api/users/${id}/favorites`)
    .then(response => {
      return response.json()
    })
    .then(returned => {
      /// clean up this repsonse. set data.id = data.movie_id. This will make it easier to manage
      this.props.addFavs(returned.data)
    })
  };


  render() {
    const { favorites } = this.props
      return (
        <div className="movie-container">
        {favorites.map((movie, i) => <MovieCardContainer data={movie} key={i} />)}
        </div>
      )
    };

    componentDidMount() {
      const { user, history} = this.props
      if(!user.name){
        history.push('/login')
        return null
      } else {
        this.getAllFavs(user.id)
      }
    };
    
};


export default Favorites;
