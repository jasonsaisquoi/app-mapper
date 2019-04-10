import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CommentCard extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  
  delete() {
    axios.get(`http://localhost:4000/project/${this.props.projectId}/delete/${this.props.commentId}`)
      .then(console.log('deleted comment!'))
      .catch(err => console.log(err))
      window.location.reload();
  }

  render() {
    
    

    
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row ">
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <p className="card-header">{this.props.obj.content}</p>
                  <p className="card-header">{this.props.commentId}</p>
                  <div className="btn-group flex-wrap">
                    <button className="btn btn-success">UpVote <i className="fas fa-thumbs-up"></i></button>
                    <button className="btn btn-outline-primary">
                      <i className="far fa-thumbs-up"></i></button>
                  </div>
                  <button onClick={this.delete} className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
 
export default CommentCard;