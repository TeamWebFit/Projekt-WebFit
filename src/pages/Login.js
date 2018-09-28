import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert';
import Auth from '../App';
import { BrowserRouter as Redirect } from 'react-router-dom';

// ===================
// Login Page
// Login Page for Customers
// ===================

class login extends Component{
    render(){
      
    
        return (
            <div>
                <div className="container">
                    <Alert 
                        title="Guten Tag" 
                        message="bitte logge dich hier ein" 
                        type="alertgrad"
                    ></Alert>
                </div>
            </div>
        )
    }
}

export default login;