import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  };

  render() {
    return(
      <form>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="email"
          value={this.state.password}
          minLength="4"
          onChange={(e) => this.setState({ password: e.target.value })}
          placeholder="Password"
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}
