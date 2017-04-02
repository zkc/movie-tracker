import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

  fetchTrailers(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=27e338799cd4f5b4a3f2f72f5ec21881&language=en-US`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const trailer = json.results.filter(trailer => trailer.type === 'Trailer' );
        this.props.addTrailers(trailer[0])
      })
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
    const { data, user, router } = this.props
    const { id, title, poster_path, release_date, vote_average, overview } = data
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
        { user.email ?
        <Link to={`${path}/${id}`} onClick={ () => this.fetchTrailers(id) }>
        <img className="movie-poster" src={baseURL + poster_path}/>
        </Link> :
        <Link to={'/login'}>
        <img className="movie-poster" src={baseURL + poster_path}/>
        </Link> }
        <p className="card-footer"><span>Viewer rating: { vote_average } / 10</span>
          <button className="add-favorite" onClick={() => {
          this.saveFav({movie_id: id, title, poster_path, release_date, vote_average, overview, user_id: user.id});
          this.getAllFavs(user.id)}
        }><img className="heart" src="../assets/styles/images/star-fav.svg"/>
          </button>
        </p>
      </div>
    )
  }

}


export default MovieCard;
