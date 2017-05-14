import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header>
        <div className="sign-in-wrap">
          <div className="view-favorites">
            { user.email && <p className="welcome"><img className="profile" src="../assets/styles/images/user1.svg" />Welcome, { user.name }</p> }
            { user.email && <NavLink to="/favorites"><img className="star" src="../assets/styles/images/Star_icon.svg" />View Favorites</NavLink> }
          </div>
          { !user.email && <NavLink className="sign-in" to="/login">Sign In<img className="arrow" src="../assets/styles/images/arrow-double.svg"/></NavLink> }
          { user.email && <NavLink className="sign-in" to="/" onClick={() => this.props.signOut()}>Sign Out<img className="arrow" src="../assets/styles/images/arrow-double.svg"/></NavLink> }
        </div>
        <NavLink to="/">
          <h1>Movie Tracker</h1>
        </NavLink>
      </header>
    )
  }

  componentDidUpdate(prevProps) {
    if(prevProps.user.id != this.props.user.id){
      this.props.refreshFavorites(this.props.user.id)
    }
  }

}

export default Header;
