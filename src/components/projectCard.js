import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./styles.css"

class ProjectCard extends Component {
  
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get(`http://localhost:4000/project/delete/${this.props.obj._id}`)
      .then(console.log(`Deleted project!`))
      .catch(err => console.log(err))
      window.location.reload();
  }
  
  render() {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="row ">
            <div className="col-md-4">
                <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100" />
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h4 className="card-title">{this.props.obj.project_name}</h4>
                  <p className="card-text">{this.props.obj.project_summary} </p>
                  <Link to={`/${this.props.obj._id}`} className="btn btn-primary active">Read More</Link>
                  <button className="btn btn-secondary active">Comment</button>
                  <Link to={`/edit/${this.props.obj._id}`} className="btn btn-outline-success">Update </Link>
                  <button onClick={this.delete} className="btn btn-outline-danger">Delete</button>
                  <div className="btn-group">
                    <button className="btn btn-success">UpVote <i class="far fa-thumbs-up"></i></button>
                    <button className="btn btn-info">Issue <i class="fas fa-question-circle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ProjectCard;