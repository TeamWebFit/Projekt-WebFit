import React, { Component } from 'react';
import Chart2 from 'react-chartist';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Tabs, Tab } from 'react-bootstrap';
import { Query } from 'react-apollo';

class AreaChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Heartrate: '',
    }
  }

  render() {
    if (this.props.user.id) {
      var userId = this.props.user.id;
    }else {
      var userId = "";
    }

    return(
      <div>
        <Query query={HEARTRATE_QUERY} variables={{ userId }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              console.log(data.heartRateViaUser);
              if(data.heartRateViaUser){

                  const heartrate = '';
                  console.log(heartrate);
                  const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                  const value = [100, 80, 44, 50, 60, 88, 69, 100, 111, 66, 77, 55, 50, 60, 70, 66, 64, 55, 44, 46, 55, 60, 44, 53];
                  if (heartrate) {
                    heartrate.forEach(function (element) {
                      time.push(element.time);
                      value.push(element.value);
                      console.log(time);
                    })
                  }
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
              }
          }}
        </Query>
      </div>
    )//end return
  }//end render
}//end component

const HEARTRATE_QUERY = gql`
  query HeartrateQuery($userId: ID) {
      heartRateViaUser(userId: $userId) {
          time
          value
        }
      }
    `

export default AreaChart;
