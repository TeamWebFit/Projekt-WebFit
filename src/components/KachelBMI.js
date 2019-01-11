import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Home from '../components/Home';
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// ===================
// User Page
// A page for testing all components
// ===================

class KachelBMI extends Component {

  render() {

    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser);
    return (
      <div>
        <p>Schrittzahl</p>
      </div>
    )
  }
}



export default KachelBMI;
