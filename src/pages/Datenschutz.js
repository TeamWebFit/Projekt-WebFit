import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin';
import Datenschutzerklaerung from '../components/Datenschutzerklaerung';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import MeineDaten from '../components/MeineDaten';

// ===================
// Datenschutz Page
// A page for testing all components
// ===================

class Datenschutz extends Component {
    render() {
        return (

            <div>
                <CheckLogin />
                <div className="container">
                    <div className="karte2">
                        <section className="karteDatenschutz">
                            <div className="datenschutz_body">
                                <h2>Datenschutz</h2>
                                <br />
                                <MeineDaten />
                                <br />
                                <hr />
                                <br />
                                <Datenschutzerklaerung />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Datenschutz;