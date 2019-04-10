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
        console.log(this.props);
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
        return <CommentCard projectId={this.props.match.params.id} obj={object} commentId={object._id}
        key={i} indice={i} delete = { (ind) => this.deleteItem(ind)} />
      }
    )
  }

  deleteItem(index){
		this.setState({comments : this.state.comments.filter((_,i) => i !== index)});
	}

  render() { 
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4"><small className="text-muted">Project Name: </small> {this.state.project_name}</h1>
          <p className="lead">{this.state.project_summary}</p>
          <hr className="my-4" />

          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Comment</a>
          </p>
        </div>
        <div class="container">
          <h2>Comments</h2>
          <hr />
          {this.makeCommentCard()}
        </div>
      </div>
    )
  }
}
 
export default ProjectPage;