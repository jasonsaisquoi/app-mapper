import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();
    axios.get('http://localhost:4000/auth/logout')
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err);
      })
    alert("You logged out!");
  }
  
  render() { 
    return (
      <li className="nav-item"><Link to={"/"} onClick={this.onClick} className="nav-link">Log Out</Link>
      </li>
    );
  }
}
 
export default LogoutButton;