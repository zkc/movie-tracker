import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavButtonContainer from '../containers/FavButtonContainer'


class MovieCard extends Component {



  render () {

    const { data, user, toggleFavMovie } = this.props
    const { id, poster_path, vote_average } = data;
    const baseURL = 'https://image.tmdb.org/t/p/w300';

    return (
      <div className="movie-card">
        {
          user.email
          ?
          <Link to={ `moviecard/${id}` }>
            <img className="movie-poster" src={baseURL + poster_path}/>
          </Link>
          :
          <Link to={ '/login' }>
            <img className="movie-poster" src={baseURL + poster_path}/>
          </Link>
        }
        <p className="card-footer">
          <span>Viewer rating: { vote_average } / 10</span>
          <FavButtonContainer user_id={user.id} movie_id={id} />
        </p>
      </div>
    )
  };
};


export default MovieCard;
// fetchTrailers(id) {
//   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${}&language=en-US`)
//     .then(response => {
//       return response.json()
//     })
//     .then(json => {
//       const trailers = json.results.filter(trailer => trailer.type === 'Trailer' );
//       this.props.addTrailers(trailers[0])
//     })
// };



