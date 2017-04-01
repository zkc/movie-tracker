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
    const { email, name } = this.props.user;
    return (
      <header>
        <NavLink to="/"><h1>Movie Tracker</h1></NavLink>
        <div className="user-info">
        { email && <p>Welcome, { name }</p> }
        { email && <NavLink to="/favorites">Favorites</NavLink> }
        </div>
        { !email && <NavLink className="sign-in" activeClassName="active" to="/login">Sign in <img className="arrow" src="../assets/styles/images/arrow-double.svg"/></NavLink> }
        { email && <NavLink className="sign-in" activeClassName="active" to="/" onClick={() => this.props.signOut()}>Sign out</NavLink> }
      </header>
    )
  }
}

export default Header;
