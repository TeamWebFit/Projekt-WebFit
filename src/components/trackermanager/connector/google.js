import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {withCookies, Cookies} from 'react-cookie';
import {Row, Col, Grid, Well} from 'react-bootstrap';
import { Mutation, compose, graphql, gql } from 'react-apollo';
import ReactLoading from 'react-loading';
import axios from 'axios';
const queryString = require('query-string');

// ===================
// Trackermanager - Add Page
// Add a new Tracker & Account to Webfit
// ===================

class TrackerManagerConnectorGoogle extends Component{

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
        var auth = window.location.search;

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
            var access_token = response.data.access_token
            var token_type = response.data.token_type
            var expires_in = parseInt(response.data.expires_in)
            var renew_token = response.data.renew_token
            console.log("Now push to addTracker")

            graphql(AddTrackerMutation, { name: 'CreateTracker' });

          })
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


    const AddTrackerMutation = gql`
    mutation CreateTracker {
        createTracker(userId: "5c1279abf174fa54e3bc687f", trackerModelID:"5c12653218ca184f7404523f"){id}
      }
      
  `;

export default TrackerManagerConnectorGoogle