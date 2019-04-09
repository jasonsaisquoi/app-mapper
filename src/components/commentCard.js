import React, { Component } from 'react';
import axios from 'axios';
class CommentCard extends Component {
  
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   axios.get(`http://localhost:4000/project/${this.props.obj}/comments`)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch( (err) => console.log(err));
  // }

  render() { 
    return (
        <p>{this.props.obj}</p>
    );
  }
}
 
export default CommentCard;