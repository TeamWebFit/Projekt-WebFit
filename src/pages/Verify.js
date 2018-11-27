//react basics
import React, { Component } from 'react';
import {} from 'react-bootstrap';
import '../App.css';
//Apollo
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

//Router
import { withRouter, Link } from 'react-router-dom';


// ===================
// Verify Component
// for Double-Opt-In: after confirmation Link
// ===================

class Verify extends Component{

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      email: ''
    }
  }


    render(){
      const queryString = require('query-string');
      var parsed = queryString.parse(window.location.search);
      var token = parsed.token;

      var date = new Date();
      var dateString = date.toString();

      this.props.updateVerifiedUser({
        variables: {
          authToken: token,
          updatedAt: dateString,
          lastLogin: dateString
        }
      });


        return (
            <div className="text-center">
                <h1>Email-Adresse bestätigt!</h1>
                <h4>Vielen Dank, du hast Deine Email-Adresse erfolgreich bestätigt.</h4>
            </div>
        )

    }
}


const updateVerifiedUser = gql`
  mutation UpdateVerifiedUser($authToken: String!, $lastLogin: String, $updatedAt: String){
      verifyUser(authToken: $authToken, lastLogin: $lastLogin, updatedAt: $updatedAt)
      {
        active
        lastLogin
        updatedAt
      }
  }
`

export default compose(
  graphql(updateVerifiedUser, { name: 'updateVerifiedUser' }),
  withRouter
)(Verify);
