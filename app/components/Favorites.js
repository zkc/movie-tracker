import React, { Component } from 'react';

import MovieCard from './MovieCard'

class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      favList: []
    }
  }

  getAllFavs(id) {
    //call api,
    // fetch('')
    //end promise by setting state
  }

  render() {
    const { user, history } = this.props
    const { favList } = this.state

    if(!user){ history.push('/new-user') }

    this.getAllFavs(user.id)

    return (
      <div>
        {favList.map((movie) => <MovieCard data={movie} />)}
      </div>
    )
  }
}

export default Favorites