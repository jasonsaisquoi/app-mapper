import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CommentCard extends Component {
  

  render() { 
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row ">
            {/* <div className="col-md-4">
                <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100" />
              </div> */}
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <p className="card-header">{this.props.obj}</p>
                  <div className="btn-group flex-wrap">
                    <button className="btn btn-success">UpVote <i className="fas fa-thumbs-up"></i></button>
                    <button className="btn btn-info">Issue <i className="fas fa-question-circle"></i></button>
                    <button className="btn btn-outline-primary">
                      <i className="far fa-thumbs-up"></i></button>
                    <button className="btn btn-outline-info">
                      <i className="far fa-question-circle"></i></button>
                    <button className="btn btn-outline-secondary">
                      <i className="fas fa-comment-dots"></i></button>
                  </div>
                  <button className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
 
export default CommentCard;