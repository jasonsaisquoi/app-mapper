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

  makeRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${r},${g},${b})`;
    return bgColor;
  }

  makeProjectCard() {
    return this.state.project.map( (object, i) => {
      console.log(object);
      return <ProjectCard color={this.makeRandomColor()} projectId={object._id} obj={object} key={i} indice={i} delete = { (ind) => this.deleteItem(ind)} />
    })
  }

  deleteItem(index){
		this.setState({project : this.state.project.filter((_,i) => i !== index)});
	}

  render() {
    return(
      <div className="container">
        <h2 style={{textAlign: "center", fontSize: 2+`em`, paddingTop: 10+'px'}}>Project List</h2>
        <div className="cardgroup">
          {this.makeProjectCard()}
        </div>
      </div>
    )
  }
}