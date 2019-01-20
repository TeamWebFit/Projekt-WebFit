import React, { Component } from 'react';
import Chartist from 'chartist';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from 'react-loading';
import date from 'date-and-time';
import { } from 'chartist-plugin-legend';

class StepsSortWeekly extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
    }
  }

  render() {
    const steps =this.props.steps;

    //Array sortieren nach Zeit
    function compare(a,b) {
      if (a.time < b.time)
        return -1;
      if (a.time > b.time)
        return 1;
      return 0;
    }
    const sortedSteps= steps.sort(compare);
    const dayValue = [];
    const dayChart = [];
    var valueSteps = 0;

    var start = sortedSteps[sortedSteps.length-1].time //aktuellster Zeitpunkt
    var startDate = new Date(parseInt(start)); //aktuellster Zeitpunkt als DateObjekt
    //console.log("Startdatum: "+startDate);
    var startDateTemp = new Date(parseInt(start));

    var startDate0000 = startDateTemp.setHours(0,0,0,0);
    var startDate0000Test = new Date(startDate0000);
    //console.log("Startdatum 0000: "+startDate0000Test);


    for (var j = 1; j < sortedSteps.length; j++) {
      var elementTime = sortedSteps[sortedSteps.length-j].time; //Jedes Elemt des Arrays
      var elementValue = sortedSteps[sortedSteps.length-j].value;

        if(elementTime <= startDate && elementTime > startDate0000Test){
          var valueElem = parseInt(elementValue);
          valueSteps = valueSteps + valueElem;
        }
    }
    dayValue.push(valueSteps);
    dayChart.push(startDate.getDay());
    valueSteps = 0;

    for (var i = 0; i < 6; i++) {

      let tagXanfang = date.addDays(startDate0000Test, -i);

      let tagXende = date.addDays(startDate0000Test, -i-1); //ein Tag vor aktuellster Zeitpunkt

      for (var j = 1; j < sortedSteps.length; j++) {
        var elementTime = sortedSteps[sortedSteps.length-j].time; //Jedes Elemt des Arrays
        var elementValue = sortedSteps[sortedSteps.length-j].value;

          if(elementTime <= tagXanfang && elementTime > tagXende){
            var valueElem = parseInt(elementValue);
            valueSteps = valueSteps + valueElem
          }

      }
      dayValue.push(valueSteps);
      dayChart.push(tagXende.getDay());
      valueSteps = 0;


    }
    //console.log(dayValue);
    //console.log(dayChart);

    const timeArray = [];
    const valueArray = [];

    for (var i = 1; i < dayValue.length+1; i++) {
      valueArray.push(dayValue[dayValue.length-i]);
    }
    //console.log(valueArray);

    for (var i = 1; i < dayChart.length+1; i++) {
      switch (dayChart[dayChart.length-i]) {
        case 0:
          timeArray.push("Sonntag");
          break;
        case 1:
          timeArray.push("Montag");
        break;
        case 2:
          timeArray.push("Dienstag");
        break;
        case 3:
          timeArray.push("Mittwoch");
        break;
        case 4:
          timeArray.push("Donnerstag");
        break;
        case 5:
          timeArray.push("Freitag");
        break;
        case 6:
          timeArray.push("Samstag");
        break;
        default:
          console.log("switch fail");

      }

    }
    console.log(timeArray);
    var data = {
      labels: timeArray,
      series: [
        valueArray,
      ]
    };

    var options = {
      height:'220px',
      axisX: {
        labelInterpolationFnc: function (value, index) {
          return value;
        }
      },
      plugins: [
          Chartist.plugins.legend({
            className: 'Bluepill',
        })
      ]
    };

    var type = 'Bar';

    return(
      <div className="chartboxweekly">
        <h6 className="headlinecharts">Schrittanzahl der<br />letzten 7 Tage</h6>
        <Chart1 data={data} options={options} type={type} />
      </div>
    )
  }
  //end render
}//end component


export default StepsSortWeekly;
