//signUp.form.js


import React, { Component } from 'react';
import axios from 'axios';

class SignUpForm extends Component {

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
    axios.post('http://localhost:4000/auth/sign-up', obj)
      .then(res => console.log(res.data)).catch(err => {
        console.log(err);
      } );
    console.log(`The user saved is ${this.state.username}`);
    this.props.history.push('/project-index');
    window.location.reload();
  }

  render() {
    return (
      <div className="container" style={{marginTop:20}}>
        <h2 style={{textAlign: "center"}}>Sign Up</h2>
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
            <input type="submit" className="btn btn-lg btn-outline-primar active" value="Create User"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm