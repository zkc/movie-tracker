import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MovieCard extends Component {
  saveFav(movieStuff) {
    const { history } = this.props
    // if(movieStuff.user_id) {do the stuff}
    console.log(movieStuff)
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieStuff)
    }).then(response => {
      console.log(response)
      if(!response.ok){ history.push('/login')}
      else{console.log(response)}
    })
  }


  render () {
    const { data, user } = this.props
    const { id, title, poster_path, release_date, vote_average, overview } = data
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    return (
      <div>
      <button onClick={() => this.saveFav({movie_id: id, title, poster_path, release_date, vote_average, overview, user_id: user.id})}> Fav Me </button>
      <Link to={`/movie/${id}`}>
      <img src={baseURL + poster_path}/>
      </Link>
      </div>
    )
  }

}


export default MovieCard;
