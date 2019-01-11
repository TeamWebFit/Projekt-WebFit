import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

// ===================
// Datenschutz Page
// A page for testing all components
// ===================

class MeineDaten extends Component {
    render() {
        return (

            <div>
                <div className="">
                    <div className="datenschutz-switch">
                        <p><strong>Schritte synchronisieren</strong></p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <br />
                        <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                    </div>
                    <div>
                        <p><strong>Puls synchronisieren</strong></p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                    </div>
                    <div>
                        <p><strong>Gewicht synchronisieren</strong></p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeineDaten;