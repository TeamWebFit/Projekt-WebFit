import React, { Component } from 'react';
import Chart2 from 'react-chartist';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Tabs, Tab } from 'react-bootstrap';
import { Query } from 'react-apollo';
import { withCookies, Cookies } from 'react-cookie';

class AreaChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Heartrate: '',
    }
  }

  render() {
    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    
    return(
      <div>
        <Query query={HEARTRATE_QUERY} variables={{ cookieuser }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              if(data.heartRateViaUser !== null || data.heartRateViaUser.length > 0){

                  const heartrate = data.heartRateViaUser;
                  console.log(heartrate);
                  
                  const time = [];
                  const value = [];
                  const tid = [];
                  
                  if (heartrate) {
                    heartrate.forEach(function (element) {
                      time.push(element.time);
                      value.push(element.value);
                      tid.push(element.trackerId);
                    })
                  }
                  console.log(tid);
                  
                  const timeArray = [];
                  for (var i = 0; i < 7; i++) {
                    timeArray.push(time[i]);
                  }

                  const valueArray = [];
                  for (var i = 0; i < 7; i++) {
                    valueArray.push(value[i]);
                  }

                  var data = {
                    labels: timeArray,
                    series: [
                      valueArray,
                    ]
                  };

                  var options = {
                    showArea: false,
                    showLine: true,
                    showPoint: false,
                    fullWidth: true,
                    height: '220px',
                    axisX: {
                      showLabel: false,
                      showGrid: false
                    }
                  };

                  var type = 'Line'

                  return (
                    <div className="container chartbox">
                      <h6 className="headlinecharts">Herzfrequenz</h6>
                      <div className="area1"><Chart2 data={data} options={options} type={type} /></div>
                      <div className="area2">
                        <div className="herzfrequenz">Durchschnittsfrequenz:</div>
                        <div className="ideal">Dein Idealwert:</div>
                        <div className="hoehepunkt">Höhepunkt:</div>
                        <div className="tiefpunkt">Tiefpunkt:</div>
                      </div>
                    </div>
                  )
              } else {
                return (
                <div>error</div>
                )
              }
          }}
        </Query>
      </div>
    )//end return
  }//end render
}//end component

const HEARTRATE_QUERY = gql`
  query HeartrateQuery($cookieuser: ID) {
      heartRateViaUser(userId: $cookieuser) {
          time
          value
          trackerId
        }
      }
    `

export default AreaChart;
