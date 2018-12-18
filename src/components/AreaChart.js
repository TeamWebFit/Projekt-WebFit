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
    const time = [];
    const value = [];
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
      axisX: {
        showLabel: false,
        showGrid: false
      }
    };

    var type = 'Line'

    return (
      <div class="chartbox">
        <h6 class="headlinecharts">Line Chart</h6>
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