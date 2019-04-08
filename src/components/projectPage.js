import React, { Component } from 'react';
import axios from 'axios';
import CommentCard from './commentCard';

class ProjectPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      project_name: this.props.project_name,
      project_summary: this.props.project_summary,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/project/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          project_name: response.data.project_name,
          project_summary: response.data.project_summary,
          comments: response.data.comments
        })
      })
      .catch( (err) => console.log(err))
  }

  makeCommentCard() {
    return this.state.comments.map(
      (object, i) => {
        return <CommentCard obj={object}
        key={i} indice={i} />
      }
    )
  }

  render() { 
    return (
      <div className="container">
        <h1>{this.state.project_name}</h1>
        <div className="container">
          {this.makeCommentCard()}
        </div>
      </div>
    );
  }
}
 
export default ProjectPage;