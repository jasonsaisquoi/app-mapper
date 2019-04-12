import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() { 
    return (
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block h-100 w-100" src="https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to App Mapper</h1>
              <Link to={"/login"} className="btn btn-lg btn-outline-primary active">Sign Up</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block h-100 w-100" src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Vote on app ideas!</h1>
              <Link to={"/login"} className="btn btn-lg btn-outline-secondary active">Log In</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block h-100 w-100" src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Rate MVPs in an army of MVPs</h1>
              <Link to={"/login"} className="btn btn-lg btn-outline-secondary active">Log In</Link>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
    );
  }
}
 
export default HomePage;