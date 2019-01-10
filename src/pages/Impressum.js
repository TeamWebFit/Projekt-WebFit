import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import Button from '../components/Button'
import CheckLogin from '../components/CheckLogin'

// ===================
// Datenschutz Page
// A page for testing all components
// ===================

class Impressum extends Component{
    render(){
        return (
         
            <div>
               <CheckLogin />  
                <div className="container">
                <h2>AGB und Impressum</h2>
                <Alert 
                  title="Es ist ein Fehler aufgetreten :(" 
                  message="Hier entsteht bald eine neue Seite!" 
                  type="alertred"
                ></Alert>
            </div>
                
            </div>
        )
    }
}

export default Impressum;