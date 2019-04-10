//edit project

import React, { Component } from 'react';
import axios from 'axios';

export default class ProjectEdit extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectSummary = this.onChangeProjectSummary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      project_name: this.props.project_name,
      project_summary: this.props.project_summary
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/project/edit/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          project_name: response.data.project_name,
          project_summary: response.data.project_summary
        })
      })
      .catch( (err) => console.log(err))
  }
  onChangeProjectName(e) {
    this.setState({
      project_name: e.target.value
    });
  }
  onChangeProjectSummary(e) {
    this.setState({
      project_summary: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      project_name: this.state.project_name,
      project_summary: this.state.project_summary
    };
    axios.put('http://localhost:4000/project/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data)).catch(err => console.log(err));
    
    this.props.history.push('/project-index');
    window.location.reload();
  }

  render() {
    return (
      <div className="container" style={{marginTop: 10+"px"}}>
        <h2>Update Project</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <label>Project Name:  </label>
              <input 
                type="text" 
                className="form-control" 
                value={this.props.project_name}
                onChange={this.onChangeProjectName}
                />
          </div>
          <div className="form-group">
              <label>Project Summary:  </label>
              <textarea
                rows="5" 
                className="form-control" 
                value={this.props.project_summary}
                onChange={this.onChangeProjectSummary}
                />
          </div>
          <div className="form-group">
            <input type="submit" 
              value="Update Project" 
              className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}