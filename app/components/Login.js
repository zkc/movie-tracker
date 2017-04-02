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
      <div className="login">
        <form>
          { this.state.error && <p className="errorMessage">{ this.state.error }</p>}
          <input className="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Email"
            required
            />
          <input className="password"
            type="password"
            name="password"
            value={this.state.password}
            minLength="4"
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="Password"
            required
            />
          <button className="sign-in-btn"onClick={ (e) => this.login(e) }>Sign in</button>
        </form>
        <Link to="/new-user" className="create-account">Create an account</Link>
      </div>

    )
  }
};

Login.propTypes = {
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  error: React.PropTypes.string
};
