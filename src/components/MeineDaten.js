import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {withCookies, Cookies} from 'react-cookie';

// ===================
// Datenschutz Page
// A page for testing all components
// ===================

class MeineDaten extends Component {

    constructor(props){
        super(props);
        this.state = {
            steps : "",
            weight: "",
            heart: ""
        }
    }

     render() {
        const cookies = new Cookies ();
        var cookieuser = cookies.get('webfit_user');
        
        const getUser = gql`
            query getSettings($cookieuser: ID){
                user(id: $cookieuser){
                    id,
                    allowweight,
                    allowheart,
                    allowsteps
                }
            }
            `;

        return (
            <div>
                
                                <div className="datenschutz-switch">
                                    <p><strong>Schritte synchronisieren</strong></p>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked={this.state.steps} />
                                        <span className="slider round"></span>
                                    </label>
                                    <br />
                                    <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                                </div>
                                <div>
                                    <p><strong>Puls synchronisieren</strong></p>
                                    <label className="switch">
                                        <input type="checkbox"  defaultChecked={this.state.heart} />
                                        <span className="slider round"></span>
                                    </label>
                                    <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                                </div>
                                <div>
                                    <p><strong>Gewicht synchronisieren</strong></p>
                                    <label className="switch">
                                        <input type="checkbox"  defaultChecked={this.state.weight} />
                                        <span className="slider round"></span>
                                    </label>
                                    <p><i id="icon-trash" className="fa fa-trash"></i>Meine Daten aus der Datenbank löschen</p>
                                </div>
                </div>
                    
                        
        )
    }
}

export default MeineDaten;