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
    return (
      <header>
        <NavLink to="/favorites">Favorites</NavLink>
        <h1>Movie Tracker</h1>
        <input className="search-input" type="text" placeholder="Search Movies" value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value})}/>
        <NavLink to="/sign-in">Sign In</NavLink>
      </header>
    )
  }
}

export default Header;
