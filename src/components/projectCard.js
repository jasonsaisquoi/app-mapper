import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card" style={{width: 18 + "rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.obj.project_name}</h5>
          <p className="card-text">{this.props.obj.project_summary}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
        <div className="btn-group">
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    )
  }
}

export default ProjectCard;