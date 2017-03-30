import React, { Component } from 'react';


export default class NewUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  createUser(e) {
    e.preventDefault();
    const { signIn, signInFailed } = this.props;
    const body = JSON.stringify(this.state);
    console.log(body);

    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
      })
      .then(response => {
        console.log(response);
      if (!response.ok) {
        this.setState({ error: 'Invalid Credentials' })
      }
      else {
        response.json().then(user => console.log(user))
        // redirect??
      }
      })
      .catch(error => {
      signInFailed(error);
      })
  }

  render() {
    return(
      <div>
        <p>Create your MovieTracker profile!</p>
        <form>
          <input name="name" required type="name" placeholder="Name" onChange={ (e) => this.handleChange(e) }/>
          <input name="email" required type="email" placeholder="Email" onChange={ (e) => this.handleChange(e) }/>
          <input name="password" required minLength="4" type="password" placeholder="Password" onChange={ (e) => this.handleChange(e) }/>
          <button type="submit" onClick={ (e) => this.createUser(e) }>Submit</button>
        </form>
      </div>
    )
  }
}
