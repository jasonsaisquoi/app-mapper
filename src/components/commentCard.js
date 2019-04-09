import React, { Component } from 'react';
import axios from 'axios';
class CommentCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() { 
    return (
        <p>{this.props.obj}</p>
    );
  }
}
 
export default CommentCard;