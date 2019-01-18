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
    if(this.props.user){
      var userId = this.props.user.id;
    }


    return (
      <div>
        <Query query={getWeight} variables={{ userId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            if (data.weight.length > 0 && this.props.user.height){
            var height = this.props.user.height;
            var weightValue = data.weight[data.weight.length - 1].value;
            var bmi = weightValue / Math.pow((height/100), 2);
            var bmiRound = Math.round(bmi);
            console.log(bmiRound);
              return (
                <div>
                  <p>aktueller BMI</p>
                  <h3 className="kachelNumber">{bmiRound}</h3>
                </div>
              )
            }else{
              return (
                <div>
                  <p>aktueller BMI</p>
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

export default KachelBMI;
