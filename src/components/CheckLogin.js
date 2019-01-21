import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {withCookies, Cookies} from 'react-cookie';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom';
import SetDatenschutz from './SetDatenschutz';

// ===================
// CheckLogin Component
// A component which checks wether the user is logged in.
// ===================

class CheckLogin extends Component{
  
    
    
    render(){

        const getUser = gql`
query cookieuser($cookieuser: ID){
    user(id: $cookieuser){
        id,
        name,
        allowweight,
        allowheart,
        allowsteps
    }
  }
`;
const cookies = new Cookies ();
var cookieuser = cookies.get('webfit_user');
//console.log(cookieuser)
    
        return (
            <div>

                
        <Query query={getUser} variables={{ cookieuser }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <div className="loading-screen">
                                
                                    <div className="container top-abstand">
                                        <div className="row">
                                            <div className="col-md-12 text-center ">
                                                <div className="col-md-4">
                                                        <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
                                                </div>
                                                <div className="col-md-8">
                                                        <h2>WebFit wird geladen</h2> 
                                                        Bitte stelle sicher, dass Du Dich im VPN der Hochschule Furtwangen befindest.
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            if (error) return (
                                <div>
                                    Fehler
                                 {/*<Redirect to='/login' /> */}
                               </div>);

                            if (data['user'] === null){
                                return(
                                    <div>
                                     <Redirect to='/login' />
                                    </div>
                                )
                               
                            }else{
                                if (data['user'].id === cookieuser){
                                    return(<div>
                                        
                                         </div>)
                                }else{
                                    return(
                                        <div>
                                        <Redirect to='/login' />
                                       </div>
                                    )
                                   
                                    

                                }
                            }
                            
                            }}
                        </Query>
                
            </div>
        )
    }
}

export default CheckLogin;