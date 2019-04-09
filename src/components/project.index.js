//project.index.js

import React, { Component } from 'react';
import axios from  'axios';
import ProjectCard from './projectCard'

export default class ProjectIndex extends Component {
  
  constructor(props) {
    super(props);
    this.state = {project: []}
  }
  
  componentDidMount(){
    axios.get('http://localhost:4000/project')
      .then(response => {
        this.setState({project: response.data});
      })
      .catch( (err) => console.log(err));
  }

  makeProjectCard() {
    return this.state.project.map( (object, i) => {
      console.log(object);
      return <ProjectCard projectId={object._id} obj={object} key={i} indice={i} delete = { (ind) => this.deleteItem(ind)} />
    })
  }

  deleteItem(index){
		this.setState({project : this.state.project.filter((_,i) => i !== index)});
	}

  render() {
    return(
      <div className="container">
        <h3>Project List</h3>
        <div className="cardgroup">
          {this.makeProjectCard()}
        </div>
      </div>
    )
  }
}