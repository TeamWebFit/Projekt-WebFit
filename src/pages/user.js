import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'

// ===================
// User Page
// A page for testing all components
// ===================

class User extends Component{
    render(){
        return (
            <div>
                <div className="container">
                    <Alert
                        title="Dein Profil"
                        message="Hier wird in Kürze eine tolle Profil-Seite erstellt."
                        type="alertgrad"
                    ></Alert>
                </div>

            </div>
        )
    }
}

export default User;
