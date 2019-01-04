import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin'
import EditUser from '../components/EditUser';

// ===================
// Edit Page
// A page for testing all components
// ===================

class Edit extends Component {

  render() {
    return (
      <div>
        <CheckLogin />
        <EditUser />
      </div>
    )
  }
}

export default Edit;

