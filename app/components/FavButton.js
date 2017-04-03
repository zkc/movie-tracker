import React, { Component } from 'react';


const FavButton = ({ user_id, movie_id, toggleFavMovie, favorites }) => {
  const amIFav = favorites.find(mov => mov.id === movie_id)

  return (
    <button className="add-favorite" onClick={() => toggleFavMovie(user_id, movie_id)} >
      <img className={`heart ${amIFav && 'heart-fav'}`} src="../assets/styles/images/star-fav.svg"/>
    </button>
  )
}


export default FavButton
