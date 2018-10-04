import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'

// ===================
// 404 Page
// A page for testing all components
// ===================

class profil extends Component{
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

export default profil;