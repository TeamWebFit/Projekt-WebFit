import React, { Component } from 'react';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';


class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
    }
  }

  render() {

    const steps = this.props.allStepsQuery.allSteps;
    console.log(steps);
    const time = [];
    const value = [];
    if(steps){
      steps.forEach(function(element){
        //console.log(element.time);
        time.push(element.time);
        value.push(element.value);
        console.log(time);
      })
    }
    const timeArray = [];
    for(var i = 0; i < 7; i++){
      timeArray.push(time[i]);
    }
    console.log(timeArray);

    const valueArray = [];
    for(var i = 0; i < 7; i++){
      valueArray.push(value[i]);
    }
    console.log(valueArray);

    var data = {
      labels: timeArray,
      series: [
        valueArray
      ]
    };

    var options = {
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return value;
        }
      }
    };

    var type = 'Bar';

    return (
      <div class="container">
        <div class="chartbox">
          <h6 class="headlinecharts">Wöchentliche Schrittanzahl</h6>
          <Chart1 data={data} options={options} type={type} />
        </div>
      </div>
    )
  }
}

const ALL_STEPS_QUERY = gql`
  query AllStepsQuery {
    allSteps {
      time
      value      
    }
  }
`

export default compose(
  graphql(ALL_STEPS_QUERY, { name: 'allStepsQuery' }),
  withRouter
)(BarChart);