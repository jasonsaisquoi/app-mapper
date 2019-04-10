//signUp.form.js


import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:20}}>
        <h2 style={{textAlign: "center"}}>Sign Up</h2>
        <form>
          <div className = "form-group">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control"
              />
          </div>
          <div className = "form-group">
            <label>Password</label>
            <input 
              type="text" 
              className="form-control"
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