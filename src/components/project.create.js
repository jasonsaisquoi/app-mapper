//create project

import React, { Component } from 'react';
import axios from 'axios';

export default class ProjectCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectSummary = this.onChangeProjectSummary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      project_name: '',
      project_summary: '',
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
    const obj = {
      project_name: this.state.project_name,
      project_summary: this.state.project_summary
    };
    axios.post('http://localhost:4000/project/add', obj)
      .then(res => console.log(res.data)).catch(err => {
        console.log(err);
      } );
    console.log(`The project is ${this.state.project_name}`);
    this.props.history.push('/project-index');
    window.location.reload();
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