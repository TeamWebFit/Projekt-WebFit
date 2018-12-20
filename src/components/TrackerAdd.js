import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert';
import { graphql, compose } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {withCookies, Cookies} from 'react-cookie';

// ===================
// User Page
// A page for testing all components
// ===================

class AddTracker extends Component{

    constructor(props){
      super(props);
      this.state = {
        manufacturer: '',
        type: '',
        trackerID: ''
      }
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onClick2 = this.onClick2.bind(this);
    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    onClick(e){
      console.log("Submit geht");
      var trackerherstellerLink = this.state.trackerHersteller;
      console.log(trackerherstellerLink);
      window.open(trackerherstellerLink);
    }

    onClick2(e){
      const queryString = require('query-string');
      var parsed = queryString.parse(window.location.hash);
      if(parsed){
        var access_token = parsed.access_token;
        var user_id = parsed.user_id;
        var token_type = parsed.token_type;
        //var token_type = "Test"
        var expires_in = parseInt(parsed.expires_in);
        var trackerModelID = "5bfeabf014770a36348528c6";

        const cookies = new Cookies ();
        var cookieuser = cookies.get('webfit_user');
        console.log(cookieuser);
        var userId = cookieuser;

        this.props.createTrackerMutation({
          variables: {
            trackerModelID: trackerModelID,
            userId: userId,
            access_token: access_token,
            token_type: token_type,
            expires_in: expires_in,
            user_id: user_id,
          }
        });
        console.log("new Tracker");
      }
    }

    render(){
      const { trackerModell } = this.state;
      const trackermodelsToRender = this.props.allTrackermodelsQuery.allTrackerModels;
      console.log(trackermodelsToRender);

        return (
            <div>
                <div className="container">
                  <h3>Neuen Tracker hinzufügen</h3>
                    <select onChange={this.onChange} value={trackerModell} name="trackerHersteller">
                      <option>Bitte auswählen</option>
                      {getOptions(trackermodelsToRender)}
                    </select><br /><br />
                  <button onClick={this.onClick} className="btn btn-basic">Autorisieren</button>
                    <button onClick={this.onClick2} className="btn btn-basic">Tracker speichern</button>

              </div>
            </div>
        )
    }
}

function getOptions(array) {
    const options = [];
    if (array) {
      array.forEach(function(element) {
        console.log(element.id, element.manufacturer);
        options.push(<option key={element.id} value={element.authLink}>{element.manufacturer}, {element.type}</option>)
      });
    }
    return options;
}

const ALL_TRACKERMODELS_QUERY = gql`
  query AllTrackermodelsQuery {
    allTrackerModels {
      id
      manufacturer
      type
      authLink
    }
  }
`

const createTrackerMutation = gql`
  mutation CreateTrackerMutation($trackerModelID: ID!, $userId: ID!, $access_token: String, $token_type: String, $expires_in: Int, $user_id: String)
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
      access_token
      token_type
      expires_in
    }
  }
`


export default compose(
  graphql(ALL_TRACKERMODELS_QUERY, { name: 'allTrackermodelsQuery'}),
  graphql(createTrackerMutation, { name: 'createTrackerMutation'})
)(AddTracker);
