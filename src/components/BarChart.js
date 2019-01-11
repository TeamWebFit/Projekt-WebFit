import React, { Component } from 'react';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';



class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
    }
  }

  render() {

    const steps = this.props.steps.stepsViaUser;
    const time = [];
    const value = [];
    if(steps){
      steps.forEach(function(element){
        time.push(element.time);
        value.push(element.value);
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
        valueArray
      ]
    };

    var options = {
      height:'220px',
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return value;
        }
      }
    };

    var type = 'Bar';

    return (
        <div className="chartbox">
          <h6 className="headlinecharts">Wöchentliche Schrittanzahl</h6>
          <Chart1 data={data} options={options} type={type} />
        </div>
    )
  }
}


export default BarChart;
