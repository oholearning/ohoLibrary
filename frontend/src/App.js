import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


import {BrowserRouter, Switch, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header> </Header>

        <Switch>
             <Route path="/contact" component={Contact} />
             <Route path="/about/" component={About} />
             <Route exact path="/" component={Home} />
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;


