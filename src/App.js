import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap'; Beispiel - Import in Komponenten einfügen
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main"> {/*Weitere Seiteninhalte innerhalb des divs "main" !!!*/}
            <Register />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
