import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavButton from './FavButtonTest'


class MovieCard extends Component {
  saveFav(movieStuff) {
    const { history } = this.props
    if (!this.props.favorites.find(fav => movieStuff.movie_id === fav.movie_id)) {
      fetch('http://localhost:3000/api/users/favorites/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieStuff)
      }).then(response => {
        if(!response.ok) {
          history.push('/login')
        }
      })
    }
  }

  getAllFavs(id) {
    fetch(`http://localhost:3000/api/users/${id}/favorites`)
    .then(response => {
      return response.json()
    })
    .then(returned => {
      this.props.addFavs(returned.data)
    })
  }

  render () {
    const { data, user, router, favorites } = this.props
    // const { id, title, poster_path, release_date, vote_average, overview } = data
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    let path = '';
    switch (router.location.pathname) {
      case '/':
        path = '/movie'
        break;
      case '/favorites':
        path = '/favorite'
        break;
      default:
        path = '/';
    }
    return (
      <div className="movie-card">
        <img src="../assets/" />
        {
          user.email
          ?
          <Link to={`${path}/${data.id}`}>
            <img src={baseURL + data.poster_path}/>
          </Link>
          :
          <Link to={'/login'}>
            <img src={baseURL + data.poster_path}/>
          </Link>
        }
        <FavButton {...this.props} />
      </div>
    )
  }

}


export default MovieCard;


// <button className="add-favorite" onClick={() => {
//   this.saveFav({movie_id: id, title, poster_path, release_date, vote_average, overview, user_id: user.id});
//   this.getAllFavs(user.id)
// }
// }>Favorite</button>
