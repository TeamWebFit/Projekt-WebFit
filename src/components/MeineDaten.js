import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {withCookies, Cookies} from 'react-cookie';
import ReactLoading from 'react-loading';
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

    onChange(){
        console.log(this.state.
            
            )
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
                <Query query={getUser} variables={{ cookieuser }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `GRAPHQL FEHLER! ${error.message}`;
                           if (data){

                           console.log(data)
                           console.log(data.user.allowheart)
                           console.log(data.user.allowsteps)
                           console.log(data.user.allowweight)
                           this.setState.steps = data.user.allowsteps
                           this.setState.heart = data.user.allowheart
                           this.setState.weight = data.user.allowweight
                           return(
                                    
                                    <div>
                                        <div className="datenschutz-switch">
                                    <p><strong>Schritte synchronisieren</strong></p>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked={this.state.steps} onChange={this.onChange} />
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
                                );
                            }
                            }}
                    </Query>
                
                              
                </div>
                    
                        
        )
    }
}

export default MeineDaten;