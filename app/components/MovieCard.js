import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavButtonContainer from '../containers/FavButtonContainer'


class MovieCard extends Component {

  saveFav(movieStuff) {
    const { history, user, favorites } = this.props
    if (!favorites.find(fav => movieStuff.movie_id === fav.movie_id)) {
      fetch('http://localhost:3000/api/users/favorites/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieStuff)
      }).then(response => {
        if(!response.ok) {
          history.push('/login')
        } else {
          this.getAllFavs(user.id)
        }
      })
    }
  };

  fetchTrailers(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=27e338799cd4f5b4a3f2f72f5ec21881&language=en-US`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        const trailers = json.results.filter(trailer => trailer.type === 'Trailer' );
        this.props.addTrailers(trailers[0])
      })
  };

  render () {

    const { data, user, router, favorites } = this.props
    let { id, title, poster_path, release_date, vote_average, overview } = data;
    const baseURL = 'https://image.tmdb.org/t/p/w300';


    return (
      <div className="movie-card">
        { user.email
          ?
          <img className="movie-poster" src={baseURL + poster_path}/>
          :
          <Link to={'/login'}>
            <img className="movie-poster" src={baseURL + poster_path}/>
          </Link>
        }
        <p className="card-footer"><span>Viewer rating: { vote_average } / 10</span>
          <button className="add-favorite" onClick={() => this.saveFav({ movie_id: id, title, poster_path, release_date, vote_average, overview, user_id: user.id })}>
            <img className="heart" src="../assets/styles/images/star-fav.svg"/>
          </button>
        </p>
      </div>
    )
  };
};


export default MovieCard;
// <Link to={`${path}/${id}`} onClick={ () => this.fetchTrailers(id) }>

// =======
// <img src="../assets/" />
// {
//   user.email
//   ?
//   <Link to={`${path}/${data.id}`}>
//   <img src={baseURL + data.poster_path}/>
//   </Link>
//   :
//   <Link to={'/login'}>
//   <img src={baseURL + data.poster_path}/>
//   </Link>
// }
// <FavButtonContainer {...this.props} />
// >>>>>>> kz-fav-button

// <button className="add-favorite" onClick={() => {
//   this.saveFav({movie_id: id, title, poster_path, release_date, vote_average, overview, user_id: user.id});
//   this.getAllFavs(user.id)
// }
// }>Favorite</button>
