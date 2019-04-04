import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      // <div className="card mb-3" style={{width: 18 + "rem"}}>
      //   <img className="card-img-top" src="..." alt="Card image cap" />
      //   <div className="card-body">
      //     <h5 className="card-title">{this.props.obj.project_name}</h5>
      //     <p className="card-text">{this.props.obj.project_summary}</p>
      //     <a href="#" class="btn btn-primary">Details</a>
      //   </div>
      //   <div className="btn-group">
      //     <button className="btn btn-primary">Edit</button>
      //     <button className="btn btn-danger">Delete</button>
      //   </div>
      // </div>
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
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                  <a href="#" className="btn btn-outline-success">Update</a>
                  <a href="#" className="btn btn-outline-danger">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ProjectCard;