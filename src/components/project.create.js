//create project

import React, { Component } from 'react';

export default class ProjectCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectSummary = this.onChangeProjectSummary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      project_name: '',
      project_summary: '',
      score: 0
    }
  }
  onChangeProjectName(e) {
    this.setState({
      project_name: e.target.value
    });
  }
  onChangeProjectSummary(e) {
    this.setState({
      project_summary: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The project is ${this.state.project_name}`);
  }

  render() {
    return (
      <div className="container" style={{marginTop:10}}>
        <h2 style={{textAlign: "center"}}>Add New Project</h2>
        <form onSubmit={this.onSubmit}>
          <div className = "form-group">
            <label>Add Project Name:</label>
            <input 
              type="text" 
              className="form-control"
              value={this.state.project_name}
              onChange={this.onChangeProjectName}
              />
          </div>
          <div className = "form-group">
            <label>Project Summary:</label>
            <textarea className="form-control" rows="5" 
              value={this.state.project_summary}
              onChange={this.onChangeProjectSummary}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-outline-primary" value="Add Project"/>
          </div>
        </form>
      </div>
    )
  }
}