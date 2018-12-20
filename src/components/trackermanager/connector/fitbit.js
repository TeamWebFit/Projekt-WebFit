import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {withCookies, Cookies} from 'react-cookie';
import {Row, Col, Grid, Well} from 'react-bootstrap';
import { Mutation, compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ReactLoading from 'react-loading';

// ===================
// Trackermanager - Add Page
// Add a new Tracker & Account to Webfit
// ===================

class TrackerManagerConnectorFitbit extends Component{

    constructor(props){
        super(props);
        this.state = {
         error: 'false'
      }
    }

    componentDidMount(){

        const cookies = new Cookies();
        var trackerModelID = cookies.get('webfit_setup');
        var userId = cookies.get('webfit_user');
        
        const queryString = require('query-string');
        const Hash = queryString.parse(window.location.hash);

        this.checkIfSetupMode(trackerModelID);
        if (this.state.error === "false"){
            this.checkIfTooken(Hash);
        }

        if (this.state.error === "false"){
            console.log("Hier startet der Add Process")
            this.addTracker(trackerModelID, Hash, userId)
        }
    }

    checkIfSetupMode(trackerModelID){
        if (trackerModelID === undefined){
            this.setState.error = "true"
            document.location.href='/trackermanager/add';
        }
    }

    checkIfTooken(Hash){
        console.log(Hash)
        if (Hash.access_token === undefined){
            this.setState.error = "true"
            alert("Das hat leider nicht funktioniert. Bitte wende Dich an den Kundensupport.")
            document.location.href='/trackermanager/add';
            console.error("Kein Hash mitgeliefert");
        }

    }

    addTracker(trackerModelID, Hash, userId){
        console.log("Typ: " + trackerModelID);
        console.log("Access-Tooken: " + Hash.access_token)

        var access_token = Hash.access_token
        var token_type = Hash.token_type
        var expires_in = parseInt(Hash.expires_in)
        var user_id = Hash.user_id
        
            //Todo: Übergabe der Parameter
            //Todo: User Abfragen aus Cookie
            //Todo: Redirect to Success Page
        
               
           this.props.createTrackerMutation({
               variables: {
                   trackerModelID: trackerModelID,
                   userId: userId,
                   access_token: access_token,
                   token_type: token_type,
                   expires_in: expires_in,
                   user_id: user_id
               }
           })
           .then(({ data }) => {
            document.location.href="/trackermanager/add/success";
            console.log(data)
           })

        }

        render(){
            return(    
                <div>
                   <Grid>
                       <Row>
                           <Col xs={4}>
                           <ReactLoading type="spinningBubbles" color="#000000" height={'20%'} width={'20%'} />
                           </Col>
                        </Row>
                   </Grid>
                </div>
            )
        }

    }

    const createTrackerMutation = gql`
            mutation CreateTrackerMutation($trackerModelID: ID, $userId: ID, $access_token: String, $token_type: String, $expires_in: Int, $user_id: String)
            {  createTracker (
                trackerModelID: $trackerModelID,
                userId: $userId,
                access_token: $access_token,
                token_type: $token_type,
                expires_in: $expires_in,
                user_id: $user_id
                )
                {
                    id
                }
            }
            `

export default compose(
    graphql(createTrackerMutation, {name: 'createTrackerMutation'}))(TrackerManagerConnectorFitbit);