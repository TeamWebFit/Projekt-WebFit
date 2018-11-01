//react basis
import React, { Component } from 'react';
import '../App.css';
//axios
import axios from 'axios';
//Router
import { withRouter, Link } from 'react-router-dom';
//Apollo
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const queryString = require('query-string');


class NewPassword extends Component{

  constructor(props){
    super(props);
    this.state = {
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

onSubmit(e){
    e.preventDefault

    var parsed = queryString.parse(window.location.search);
    var email = parsed.email;
    console.log(email);

    var date = new Date();

    this.props.updatePassword({
      variables: {
        email: email,
        password: this.state.password,
        updatedAt: date
      }
    });
    console.log(this.props);
    console.log('Neues Passwort eingegeben');

  }

    render(){

        return (
            <div>
                <h1>Neues Passwort</h1>
                <form onSubmit={this.onSubmit}>
                  <p>Hier kannst Du Dein neues Passwort eingeben.</p>
                  <div className="form-group">
                    <input type="password" className="form-control" id="InputPassword" placeholder="Passwort" name="password" onChange={this.onChange} value={this.state.password} />
                  </div>
                  <button type="submit" className="btn btn-basic">Passwort zurücksetzen</button>
                </form>
            </div>
        )
    }
}

const updatePassword = gql`
  mutation UpdatePassword($email: String!, $password: String!, $updatedAt: DateTime)
  {  userNewPW (
      email: $email,
      password: $password,
      updatedAt: $updatedAt
    )
    {
      id
      email
      updatedAt
    }
  }
`

export default compose(
  graphql(updatePassword, { name: 'updatePassword'}),
  withRouter
)(NewPassword);
