//signUp.form.js


import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(obj);

    this.props.history.push('/project-index');
    window.location.reload();
  }

  render() {
    return (
      <div className="container" style={{marginTop:10}}>
        <h2 style={{textAlign: "center"}}>Log In</h2>
        <form onSubmit={this.onSubmit}>
          <div className = "form-group">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          </div>
          <div className = "form-group">
            <label>Password</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-outline-primar active" value="Log In"/>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;