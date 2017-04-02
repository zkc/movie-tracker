import React, { Component } from 'react';


// child of the movieCard and SingleMovie components.
// adds movie to favorites if not already, removes movie if it is a favorite movie
// toggles favortie of parrent movie_id

export default class FavButton {
  render () {
    //check if movie_id in props.favorites
    // if it is, apply .favorited css class

    return (
      <button> Fav </button>
    )
  }

  toggleFavorites () {
    const { favorites, movie } = this.props
    if (favorites.find(fav => movie.movie_id === fav.movie_id)) {
      //remove from favorites
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
}

