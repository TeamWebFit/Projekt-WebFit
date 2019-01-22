import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Home from '../components/Home';
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading';

// ===================
// User Page
// A page for testing all components
// ===================

class KachelHeartRate extends Component {

  render() {
    var trackerId = '';
    console.log(this.props.user);
    
    if(this.props.user.tracker === null || this.props.user.tracker === 0){
      trackerId = '';
    }else{
      trackerId = this.props.user.tracker[0].id;
    }

    return (
      <div>
        <Query query={HEARTRATE_QUERY} variables={{ trackerId }}>
          {({ loading, error, data }) => {
            if (loading) return <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
            if (error) return <div>Error</div>
            
            if (data.heartRateViaTracker === null || data.heartRateViaTracker.length <= 0) {
              return (
                <div>
                  <p>durchschnittl. Puls</p>
                  <h3 className="kachelNumber">-</h3>
                </div>
              )
            } else {
              const heartrate = data.heartRateViaTracker;
              const value = [];
              if (heartrate) {
                heartrate.forEach(function (element) {
                  value.push(element.value);
                })
              }
              var valueLength = value.length;
              var valueAverage = 0;

              for (var i = 0; i < valueLength; i++) {
                valueAverage = valueAverage + value[i];
              }

              valueAverage = valueAverage / valueLength;

              var valueAverage = Math.round(valueAverage);

              return (
                <div>
                  <p>Ø Puls</p>
                  <h3 className="kachelNumber">{valueAverage}</h3>
                </div>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

const HEARTRATE_QUERY = gql`
  query HeartrateQuery($trackerId: ID) {
      heartRateViaTracker(trackerId: $trackerId) {
          time
          value
          trackerId
        }
      }
    `

export default KachelHeartRate;
