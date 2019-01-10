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


class ResetPassword extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

async onSubmit(e){
    e.preventDefault

    const { email } = this.state;

    const form = await axios.post('https://server.webfit.app:4009/api/resetPassword', {
      email
    });

    console.log('Mail sent');

  }

    render(){
        return (
            <div>
                <h1>Passwort vergessen?</h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input type="email" className="form-control" id="InputEmail" placeholder="E-Mail" name="email" onChange={this.onChange} value={this.state.email} />
                  </div>
                  <button type="submit" className="btn btn-basic">Email anfordern</button>
                </form>
            </div>
        )
    }
}

export default ResetPassword;
