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

class KachelWeight extends Component {

  render() {
    var userId = this.props.user.id;

    return (
      <div>
        <Query query={getWeight} variables={{ userId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            console.log(data);
            if (typeof data !== 'undefined' && data.length > 0){
              var weightValue = data.weight[data.weight.length - 1].value;
              return (
                <div>
                  <p>aktuelles Gewicht</p>
                  <h3 className="kachelNumber">{weightValue}</h3>
                </div>
              )
            }else{
              return (
                <div>
                  <p>aktuelles Gewicht</p>
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

export default KachelWeight;
