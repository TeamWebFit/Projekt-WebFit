import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {withCookies, Cookies} from 'react-cookie';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom'

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
        name
    }
  }
`;
const cookies = new Cookies ();
var cookieuser = cookies.get('webfit_user');
console.log(cookieuser)
    
        return (
            <div>

                
        <Query query={getUser} variables={{ cookieuser }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `Error! ${error.message}`;

                            if (data['user'] === null){
                                return(
                                    <div>
                                     <Redirect to='/login' />
                                    </div>
                                )
                               
                            }else{
                                if (data['user'].id === cookieuser){
                                    return(<div> </div>)
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