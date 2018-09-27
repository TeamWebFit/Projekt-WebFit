import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap'; Beispiel - Import in Komponenten einfügen

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to WebFit!!!</h1>
            <div className="alertgrad">jhsidsndlkm</div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
