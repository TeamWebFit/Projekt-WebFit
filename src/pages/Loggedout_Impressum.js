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

class LoggedoutImpressum extends Component{
    UNSAFE_componentWillReceiveProps(){
        window.location.reload();
      }
    render(){
        return (
         
            <div>
                <div className="container">
                    <div className="karte2">
                        <section className="karteDatenschutz">
                            <div className="datenschutz_body">
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

export default LoggedoutImpressum;