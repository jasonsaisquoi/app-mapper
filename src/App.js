import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProjectCreate from './components/project.create';
import ProjectEdit from './components/project.edit';
import ProjectIndex from './components/project.index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">AppMapper</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to={"/"} className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link to={"/create-post"} class="nav-link" href="#">Create Project</Link>
                </li>
                <li class="nav-item">
                  <Link to={"/project-index"} class="nav-link" href="#">Post Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1>Welcome to App Mapper!</h1>
        </div>      
        <Switch>
          <Route path="/create-post" component = { ProjectCreate } />
          <Route path="/edit/:id" component = { ProjectEdit }/>
          <Route path="/project-index" component = { ProjectIndex }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
