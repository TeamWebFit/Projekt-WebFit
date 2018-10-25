import React, { Component } from 'react';
import {} from 'react-bootstrap';
//Apollo
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

// ===================
// Welcome Component
// Just a cool component, which says hello
// ===================

class Welcome extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      name: '',
      email: '',
      password: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    const userToRender = this.props.allUsersQuery.allUsers
    console.log(userToRender);
  }

    render(){
        return (
            <div className="text-center">
                <h1>Hi there :)</h1>
                <h4>Have a nice day ♥</h4>
                <button onClick={this.onClick}>Fetching Users</button>
            </div>
        )
    }
}

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      id
      firstName
      email
      password
    }
  }
`

export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery'})(Welcome)
