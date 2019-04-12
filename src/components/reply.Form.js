//create.comment

import React, { Component } from 'react';
import axios from 'axios';
export default class replyCreate extends Component {

  constructor(props){
    super(props);

    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      content: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/project/'+this.props._id)
      .then(response => {
        this.setState({project: response.data});
      })
      .catch( (err) => console.log(err));
  }

  onContentChange(e){
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      content: this.state.content
    }
    axios.post(`http://localhost:4000/project/${this.props.match.params.id}/comments`, obj)
      .then(res => console.log(res.data));
    console.log(`comment: ${this.state.content}`);
    this.props.history.push(`/${this.props.match.params.id}`);
    window.location.reload();
  };

  render() { 
    return (
      <div className="container" style={{marginTop: 10}}>
        <h2>Add a comment!</h2>
        <form onSubmit ={this.onSubmit}>
          <div className="form-group">
            <label>Throw sunshine, not shade!</label>
            <textarea 
              rows="5" 
              className="form-control" 
              type="text" 
              value={this.state.content}
              onChange={this.onContentChange}  
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-outline-primary" value="Add Comment"/>
          </div>
        </form>
      </div>
    );
  }
}
