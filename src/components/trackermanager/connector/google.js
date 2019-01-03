import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {withCookies, Cookies} from 'react-cookie';
import {Row, Col, Grid, Well} from 'react-bootstrap';
import { Mutation, compose, graphql } from 'react-apollo';
import ReactLoading from 'react-loading';
import axios from 'axios';

import gql from 'graphql-tag';

const queryString = require('query-string');



// ===================
// Trackermanager - Add Page
// Add a new Tracker & Account to Webfit
// ===================

var access_t = '';
var token_t = '';
var expires_i = '';
var refresh = '';

class TrackerManagerConnectorGoogle extends Component{

    constructor(props){
        super(props);
        this.state = {
         error: 'false',
         trackerModelID: '',
         userId: '',
         access_token: 'test',
         token_type: '',
         expires_in: '',
         refreshtoken: ''
      }
    }

    componentDidMount(){

        const cookies = new Cookies();
        var trackerModelID = cookies.get('webfit_setup');
        var userId = cookies.get('webfit_user');
        var auth = window.location.search;

        this.setState({
          trackerModelID: trackerModelID,
          userId: userId
        })

        this.checkIfSetupMode(trackerModelID);
        if (this.state.error === "false"){
           // this.checkIfTooken(Hash);
        }

        if (this.state.error === "false"){
            console.log("Hier startet der Add Process")
            this.googleOAuth(auth, trackerModelID, userId)
        }

    }

    googleOAuth(auth, trackerModelID, userId){

        // Parse URL
        const autharray = queryString.parse(auth)
        const auth_code = autharray.code
        console.log(auth_code)
        const data_final = "code="+auth_code+"&client_id=1008561982846-6omt5dknbiqv124o2h5g5nrgg27l7o7v.apps.googleusercontent.com&client_secret=qo4YWmhVsTn02kyIQkL-z0a0&grant_type=authorization_code&redirect_uri=http://localhost:3000/trackermanager/connector/google/"

        //Get Access-Tooken from Google via Auth2

        axios({
            method: 'post',
            url: 'https://www.googleapis.com/oauth2/v4/token',
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: data_final
          })
        .then(function (response) {
          access_t = response.data.access_token
          token_t = response.data.token_type
          expires_i = parseInt(response.data.expires_in)
          refresh = response.data.renew_token
          console.log("Now push to addTracker")

        })//end .then response
    }//end googleAuth

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



        render(){
          this.props.createTrackerMutation({
             variables: {
               trackerModelID: this.state.trackerModelID,
               userId: this.state.userId,
               access_token: access_t,
               token_type: token_t,
               expires_in: expires_i,
               refreshtoken: refresh,
             }
          });
          console.log("Tracker eingetragen");
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
  mutation CreateTrackerMutation($trackerModelID: ID!, $userId: ID!, $access_token: String, $token_type: String, $expires_in: Int, $refreshtoken: String)
      {  createTracker (
          trackerModelID: $trackerModelID,
          userId: $userId,
          access_token: $access_token,
          token_type: $token_type,
          expires_in: $expires_in,
          refreshtoken: $refreshtoken
        )
        {
          id
          access_token
          token_type
          expires_in
    }
  }
`

export default compose(
  graphql(createTrackerMutation, { name: 'createTrackerMutation'}),
)(TrackerManagerConnectorGoogle);
