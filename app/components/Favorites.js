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
      this.props.addMovies(returned.data)
      // this.setState({ favList: returned.data })
    })
    //call api,
    // fetch('')
    //end promise by setting state
  }

  componentDidMount() {
    const { user, history} = this.props
    if(!user.name){
      history.push('/login')
      return null
    } else {
      this.getAllFavs(user.id)
  }
}

  render() {
    const { movies } = this.props
      return (
        <div>
        {movies.map((movie, i) => <MovieCardContainer data={movie} key={i} />)}
        </div>
      )
    }

}

export default Favorites