import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../img/brand/white.png';
import blue from '../img/brand/blue.png';
import creative from "../img/brand/creativetim-white-slim.png";

// import css
import '../css/Navbar.css';


// Components 
import Team from './Team';


export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark">
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Logo</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>
          </div>
      </div>
     
   
      );
    }
}
