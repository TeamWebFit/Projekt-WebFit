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

const queryString = require('query-string');
var parsed = queryString.parse(window.location.search);
var token = parsed.token;

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

      var userToRender = this.props.FetchVerifiedUser.allUsers;
      console.log(userToRender);

      if(userToRender){
        var id = this.props.FetchVerifiedUser.allUsers["0"].id;
        console.log(id);
        this.props.UpdateVerifiedUser({
          variables: {
            id: id,
            active: true
          }
        })
      }

        return (
            <div className="text-center">
                <h1>Email-Adresse bestätigt!</h1>
                <h4>Vielen Dank, du hast Deine Email-Adresse erfolgreich bestätigt.</h4>
            </div>
        )

    }
}


const FetchVerifiedUser = gql`
  query FetchVerifiedUser($authToken: String){
      allUsers(filter: {
        authToken: $authToken
      })
      {
        id
        name
        email
      }
  }
`

const UpdateVerifiedUser = gql`
  mutation UpdateVerifiedUser($id: ID!, $active: Boolean! ){
      updateUser(id: $id, active: $active)
      {
        active
      }
  }
`

export default compose(
  graphql(FetchVerifiedUser, { name: 'FetchVerifiedUser',options: { variables: { authToken: token } }}),
  graphql(UpdateVerifiedUser, { name: 'UpdateVerifiedUser' }),
  withRouter
)(Verify);
