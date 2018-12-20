import React, { Component } from 'react';
import Chart2 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';

class AreaChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Heartrate: '',
    }
  }

  render() {

    const heartrate = this.props.allHeartrateQuery.allSteps;
    console.log(heartrate);
    const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const value = [100, 80, 44, 50, 60, 88, 69, 100, 111, 66, 77, 55, 50, 60, 70, 66, 64, 55, 44, 46, 55, 60, 44, 53];
    if(heartrate){
      heartrate.forEach(function(element){
        time.push(element.time);
        value.push(element.value);
        console.log(time);
      })
    }
    const timeArray = [];
    for(var i = 0; i < 7; i++){
      timeArray.push(time[i]);
    }

    const valueArray = [];
    for(var i = 0; i < 7; i++){
      valueArray.push(value[i]);
    }

    var data = {
      labels: timeArray,
      series: [
        valueArray,
      ]
    };

    var options = {
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      height:'220px',
      axisX: {
        showLabel: false,
        showGrid: false
      }
    };

    var type = 'Line'

    return (
      <div class="chartbox">
        <h6 class="headlinecharts">Heartrate</h6>
        <Chart2 data={data} options={options} type={type} />
      </div>
    )
  }
}

const ALL_HEARTRATE_QUERY = gql`
  query AllHeartrateQuery {
    allHeartrate {
      time
      value      
    }
  }
`

export default compose(
  graphql(ALL_HEARTRATE_QUERY, { name: 'allHeartrateQuery' }),
  withRouter
)(AreaChart);