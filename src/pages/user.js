import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin'
import UserProfile from '../components/UserProfile'

// ===================
// User Page
// A page for testing all components
// ===================

class User extends Component {

  render() {
    return (
      <div>
        <CheckLogin />
        <UserProfile />
      </div>
    )
  }
}

export default User;
