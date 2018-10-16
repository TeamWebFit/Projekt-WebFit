//react basics
import React, { Component } from 'react';
import {} from 'react-bootstrap';
import '../App.css';
//Apollo
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
//Router
import { withRouter, Link } from 'react-router-dom';


// ===================
// Verify Component
// for Double-Opt-In: after confirmation Link
// ===================
const queryString = require('query-string');
var parsed, userToRender, test;

class Verify extends Component{

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      authToken: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps fetchUser');
    userToRender = props.FetchVerifiedUser.allUsers
    console.log(userToRender);
  }


  onClick(){
    var userID = userToRender["0"].id;
    console.log(userID);

    this.props.UpdateVerifiedUser({
      variables: {
        id: userID,
        active: true
      }
    })
    this.props.history.push("/login");
  }

    render(){
      parsed = queryString.parse(window.location.search);
      console.log(parsed.token)

        return (
            <div className="text-center">
                <h1>Email-Adresse bestätigt!</h1>
                <h4>Vielen Dank, du hast Deine Email-Adresse erfolgreich bestätigt.</h4>
                <button className="btn btn-basic" onClick={this.onClick}>Bestätigen</button>

            </div>
        )
    }
}


const FetchVerifiedUser = gql`
  query FetchVerifiedUser{
      allUsers(filter: {
        authToken:"drz3dcp3xojn0h5leiiomf"
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
  graphql(FetchVerifiedUser, { name: 'FetchVerifiedUser'}),
  graphql(UpdateVerifiedUser, { name: 'UpdateVerifiedUser'}),
  withRouter
)(Verify);
