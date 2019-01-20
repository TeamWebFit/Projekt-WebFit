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

class KachelHeartRate extends Component {

  render() {
    var userId = '';

    if(this.props.user){
      userId = this.props.user.id;
    }


    return (
      <div>
        <Query query={getWeight} variables={{ userId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            if (data['user'] === null) {
              return <div>keine Daten</div>
            }
            if (data){
              return (
                <div>
                  <p>aktueller Ruhepuls</p>
                  <h3 className="kachelNumber">-</h3>
                </div>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

const getWeight = gql`
        query getWeight($userId: ID){
          weight(userId: $userId)
          {
            time
            value
          }
        }
        `

export default KachelHeartRate;
