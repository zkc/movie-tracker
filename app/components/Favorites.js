import React, { Component } from 'react';

import MovieCardContainer from '../containers/MovieCardContainer'

class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      favList: []
    }
  }

  getAllFavs(id) {
    fetch(`http://localhost:3000/api/users/${id}/favorites`)
    .then(response => {
      return response.json()
    })
    .then(returned => {
      // console.log(returned);
      this.props.addFavs(returned.data)
    })
  }

  componentDidMount() {
    console.log('favorites component');
    const { user, history} = this.props
    if(!user.name){
      history.push('/login')
      return null
    } else {
      this.getAllFavs(user.id)
  }
}

  render() {
    const { favorites } = this.props
      return (
        <div>
        {favorites.map((movie, i) => <MovieCardContainer data={movie} key={i} />)}
        </div>
      )
    }
  }


export default Favorites
