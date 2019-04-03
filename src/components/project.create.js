//create project

import React, { Component } from 'react';

export default class ProjectCreate extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:10}}>
        <h2 style={{textAlign: "center"}}>Add New Project</h2>
        <form>
          <div className = "form-group">
            <label>Add Project Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className = "form-group">
            <label>Project Summary:</label>
            <textarea className="form-control" rows="5" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-outline-primary" value="Add Project"/>
          </div>
        </form>
      </div>
    )
  }
}