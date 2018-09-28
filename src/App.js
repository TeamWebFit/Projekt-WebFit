import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert'
import Button from './components/Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap'; Beispiel - Import in Komponenten einfügen
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main"> {/*Weitere Seiteninhalte innerhalb des divs "main" !!!*/}
            <Register />
             <div className="container">
                <Alert 
                  title="Es ist ein Fehler aufgetreten :(" 
                  message="Der Prof. von neben an hat leider einen Fehler in den Code eingebaut. Versuch's später nochmal." 
                  type="alertred"
                ></Alert>
                 <Alert 
                  title="Das hat geklappt!" 
                  message="Deine Einstellungen sind erfolgreich gesetzt worden." 
                  type="alertyellow"
                ></Alert>
                <Alert 
                  title="Das hat geklappt!" 
                  message="Deine Einstellungen sind erfolgreich gesetzt worden." 
                  type="alertgrad"
                ></Alert>
                <Button
                  message="Klick mich hart"
                  type="btn-basic"
                  >
                </Button>
                <Button
                  message="+"
                  type="btn-round"
                ></Button>
            </div>
        </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
