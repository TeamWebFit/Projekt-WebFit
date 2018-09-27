import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert'
import Button from './components/Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap'; Beispiel - Import in Komponenten einfügen

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
      </Router>
    );
  }
}

export default App;
