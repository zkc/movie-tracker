import React, { Component } from 'react';


// child of the movieCard and SingleMovie components.
// adds movie to favorites if not already, removes movie if it is a favorite movie
// toggles favortie of parrent movie_id

class FavButton extends Component {
  constructor () {
    super()
    console.log(this.props)
    const { favorites, data } = this.props
    this.favToggle = favorites.find(fav => data.id === fav.movie_id)
  }
  render () {
    //check if movie_id in props.favorites
    // if it is, apply .favorited css class

    return (
      <button className={this.favToggle && 'favorite-true'} onClick={() => toggleFavorites()}> Fav </button>
    )
  }

  toggleFavorites () {
    if (this.favToggle) {
      //remove from favorites
      removeFromFavorites()
    } else {
      //add to favorites
      addToFavorites()
    }

  }

  addToFavorites () {
    fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.props.movie)
    }).then(response => {
      if(!response.ok) {
        console.log('go to login');
        // history.push('/login')
      }
    })
  }

  removeFromFavorites () {
    const { user_id, movie } = this.props
    const { movie_id } = movie
    fetch(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user_id, movie_id})
    }).then(response => {
      if(response.ok) {
        console.log('go to favorites')
        // history.push('/favorites')
      }
    })
  }
}



// FavButton.propTypes = {
//   movie: React.PropTypes.object,
//   favorites: React.PropTypes.array,
//   user_id: React.PropTypes.number
// };

export default FavButton;
