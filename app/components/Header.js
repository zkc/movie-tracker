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
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/"><h1>Movie Tracker</h1></NavLink>
        { email && <p>Welcome, { name }</p>}
        <input className="search-input"
               type="text" placeholder="Search Movies"
               value={this.state.searchInput}
               onChange={(e) => this.setState({ searchInput: e.target.value })}/>
        { !email && <NavLink to="/login">Sign In</NavLink> }
      </header>
    )
  }
}

export default Header;
