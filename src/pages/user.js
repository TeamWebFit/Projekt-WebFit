import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin'
import UserProfile from '../components/UserProfile'
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// ===================
// User Page
// A page for testing all components
// ===================

class User extends Component {

  render() {

    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser);
    return (
      <div>
        <CheckLogin />
        <Query query={getUser} variables={{ cookieuser }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              if (data['user'] === null) {
                return <div>keine Daten</div>
              }
              if (data){
                return <UserProfile user={data.user}/>
              }
            }}
        </Query>
      </div>
    )
  }
}

const getUser = gql`
        query Cookieuser($cookieuser: ID){
          user(id: $cookieuser){
            id,
            name,
            firstName,
            email,
            dateOfBirth,
            gender,

          }
        }
        `

export default User;
