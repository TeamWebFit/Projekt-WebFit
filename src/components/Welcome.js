import React, { Component } from 'react';
import {} from 'react-bootstrap';

// ===================
// Welcome Component
// Just a cool component, which says hello
// ===================

class Welcome extends Component{
    render(){
        return (
            <div className="text-center">  
                <h1>Hi there :)</h1>
                <h4>Have a nice day ♥</h4>
            </div>
        )
    }
}

export default Welcome;