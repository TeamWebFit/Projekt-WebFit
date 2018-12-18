import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import Button from '../components/Button'
import CheckLogin from '../components/CheckLogin'

// ===================
// Demo Page
// A page for testing all components
// ===================

class Demo extends Component{
    render(){
        return (
         
            <div>
               <CheckLogin />  
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
        )
    }
}

export default Demo;