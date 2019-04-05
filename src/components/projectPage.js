import React, { Component } from 'react';
import axios from 'axios';

class ProjectPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      project_name: this.props.project_name,
      project_summary: this.props.project_summary
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/project/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          project_name: response.data.project_name,
          project_summary: response.data.project_summary
        })
      })
      .catch( (err) => console.log(err))
  }

  render() { 
    return (
      <div className="container">
        <h1>{this.state.project_name}</h1>
        <p>{this.state.project_summary}</p>
      </div>
    );
  }
}
 
export default ProjectPage;