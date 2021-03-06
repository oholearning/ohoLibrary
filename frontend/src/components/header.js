import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/Navbar.css';
import logo from '../img/brand/white.png';
import blue from '../img/brand/blue.png';
import creative from "../img/brand/creativetim-white-slim.png";


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
  <a className="navbar-brand" href="#">OHO Learning</a>

  <div className="collapse navbar-collapse oho-navbar" id="navbarTogglerDemo03">


    <ul className="navbar-nav  oho-navbar">
      <li className="nav-item active">
       <Link to={"/contents"} className="nav-link">CONTENTS</Link>
      </li>
      <li className="nav-item">
   
        <Link to={"/about"} className="nav-link">ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link to={"/contact"} className="nav-link">CONTACT</Link>
      </li>
    </ul>

    
   
  </div>
</nav>
          </div>
      </div>
     
   
      );
    }
}
