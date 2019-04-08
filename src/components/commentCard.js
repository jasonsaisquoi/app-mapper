import React, { Component } from 'react';

class CommentCard extends Component {
  
  render() { 
    return (
        <p>{this.props.content}</p>
    );
  }
}
 
export default CommentCard;