import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import Button from '../components/Button'
import CheckLogin from '../components/CheckLogin'
import UnserImpressum from '../components/UnserImpressum'

// ===================
// Impressum Page
// A page for testing all components
// ===================

class Impressum extends Component{
    render(){
        return (
         
            <div>
                <CheckLogin />
                <div className="container">
                    <div className="karte2">
                        <section className="karteDatenschutz">
                            <div className="login_body">
                                <h2>Impressum</h2>
                                <br />
                                <UnserImpressum />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Impressum;