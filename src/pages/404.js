import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'

// ===================
// 404 Page
// A page for testing all components
// ===================

class notfound extends Component{
    render(){
        return (
            <div>
                <div className="container">
                    <Alert 
                        title="Ups...." 
                        message="Diese Seite konnten wir leider nicht finden.." 
                        type="alertred"
                    ></Alert>
                </div>
                
            </div>
        )
    }
}

export default notfound;