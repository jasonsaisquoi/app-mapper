//create.comment

import React, { Component } from 'react';
import axios from 'axios';
export default class CommentCreate extends Component {

  constructor(props){
    super(props);
  }

  render() { 
    return (
      <div className="container">
        <h2>Add a comment!</h2>
        <form>
          <div className="form-group">
            <label>Throw sunshine, not shade!</label>
            <textarea rows="5" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-outline-primary" value="Add Comment"/>
          </div>
        </form>
      </div>
    );
  }
}
