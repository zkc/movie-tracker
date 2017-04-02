import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  render() {
  const { email, name, } = this.props.user;
  return (
    <header>
      <div className="sign-in-wrap">
        { email && <p className="welcome"><img className="profile" src="../assets/styles/images/user1.svg" />Welcome, { name }</p> }
        { !email && <NavLink className="sign-in" to="/login">Sign in<img className="arrow" src="../assets/styles/images/arrow-double.svg"/></NavLink> }
        { email && <NavLink className="sign-in" to="/" onClick={() => this.props.signOut()}>Sign out<img className="arrow" src="../assets/styles/images/arrow-double.svg"/></NavLink> }
      </div>
      <NavLink to="/"><h1>Movie Tracker</h1></NavLink>

      <div className="view-favorites">
        { email && <NavLink to="/favorites"><img className="star" src="../assets/styles/images/Star_icon.svg" />View Favorites</NavLink> }
      </div>
    </header>
    )
  }
}

export default Header;
