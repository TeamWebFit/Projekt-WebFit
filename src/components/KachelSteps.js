import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Home from './Home';
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import ReactLoading from 'react-loading';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// ===================
// User Page
// A page for testing all components
// ===================

class KachelSteps extends Component {

  render() {
    var trackerId = '';

    if(this.props.user.tracker === null || this.props.user.tracker === 0){
      trackerId = '';
    }else{
      trackerId = this.props.user.tracker[0].id;
    }

    return (
      <div>
        <Query query={GET_STEPS} variables={{ trackerId }}>
          {({ loading, error, data }) => {
            if (loading) return <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
            if (error) return <div>Error</div>            
            if (data.stepsViaTracker === null || data.stepsViaTracker.length <= 0) {
              return (
                <div>
                  <p>durchschnittl. Schritte</p>
                  <h3 className="kachelNumber">-</h3>
                </div>
              )
            }else{
              const steps = data.stepsViaTracker;
              const value = [];
              if (steps) {
                steps.forEach(function (element) {
                    value.push(element.value);
                })
              }
              var valueLength = value.length;
              var valueAverage = 0;

              for (var i = 0; i < valueLength; i++) {
                valueAverage = valueAverage + value[i];
              }
              var distance = valueAverage * 0.65;
              var mkm = "";

              console.log(distance);
              

              if (distance > 1000){
                distance = distance / 1000;
                mkm = "km"
              } else {
                mkm = "m"
              }

              var distanceRound = Math.round(distance);
              distanceRound = distance.toFixed(1); 

            return (
                <div>
                  <p>Ø Schritte in {mkm}</p>
                  <h3 className="kachelNumber">{distanceRound}</h3>
                </div>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

const GET_STEPS = gql`
        query GetSteps($trackerId: ID){
          stepsViaTracker(trackerId: $trackerId){
            trackerId
            time
            value
          }
        }
        `

export default KachelSteps;
