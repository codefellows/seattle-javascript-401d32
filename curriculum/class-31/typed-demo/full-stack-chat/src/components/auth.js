import React from 'react';
import superagent from 'superagent';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      userToken: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    superagent.post('http://localhost:3030/signup')
      .set('Content-Type', 'application/json')
      .send({
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        this.setState({ userToken: res.text })
      });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state.userToken);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    )
  }
}

export default Auth;
