import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  };

  login(e){
    e.preventDefault();
    const { signIn, signInFailed, history } = this.props;
    const { email, password } = this.state;

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        this.setState({ error: 'Invalid Credentials' })
      }
      else {
        response.json().then(user => signIn(user.data))
        history.push('/')
      }
    })
    .catch(error => {
      signInFailed(error);
    })
  }

  render() {
    return(
      <div>
        <form>
          { this.state.error && <p className="errorMessage">{ this.state.error }</p>}
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
          <button onClick={ (e) => this.login(e) }>Submit</button>
        </form>
        <Link to="/new-user">Create an account</Link>
      </div>

    )
  }
}
