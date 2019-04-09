import React, { Component } from 'react';
class CommentCard extends Component {
  

  render() { 
    return (
        <p>{this.props.obj}</p>
    );
  }
}
 
export default CommentCard;