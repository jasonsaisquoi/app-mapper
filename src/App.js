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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand" href="#">AppMapper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create-post"} className="nav-link" href="#">Create Project</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project-index"} className="nav-link" href="#">Post Index</Link>
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
