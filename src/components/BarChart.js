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
import { } from 'chartist-plugin-tooltips';
import StepsSortWeekly from './StepsSortWeekly';


class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: '',
    }
  }

  sortAndSplit(array){
    //Array sortieren nach Zeit
    function compare(a,b) {
      if (a.time < b.time)
        return -1;
      if (a.time > b.time)
        return 1;
      return 0;
    }
    const sortedSteps= array.sort(compare);
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
    console.log(dayValue);
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
    //console.log(timeArray);

    return{
      timeArray: timeArray,
      valueArray: valueArray
    };


  }//end sortAndSplit

  render() {

    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser);

    const tracker = [];

    if(this.props.user){
      console.log("TrackerAnzahl: "+this.props.user.tracker.length);

    }

    return(
      <div>
        <Query query={GET_STEPS} variables={{ cookieuser }}>
            {({ loading, error, data }) => {
              if (loading) return <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
              if (error) return <div>Error</div>
              if(data.stepsViaUser !== null && data.stepsViaUser.length > 0){

                const steps = data.stepsViaUser;
                console.log(steps);
                const tracker = this.props.user.tracker;
                console.log(tracker);

                //Array splitten in mehrere Arrays für TrackerArrays
                const tracker1 = [];
                const tracker2 = [];

                for (var i = 0; i < steps.length; i++) {

                  for (var j = 0; j < tracker.length-1; j++) {
                    if(steps[i].trackerId === tracker[j].id){
                      console.log("Zu tracker1: "+steps[i].trackerId);
                      tracker1.push(steps[i]);
                    }
                    if(steps[i].trackerId === tracker[j+1].id){
                      console.log("Zu tracker2: "+steps[i].trackerId);
                      tracker2.push(steps[i]);
                    }
                  }
                }

                console.log(tracker1);
                console.log(tracker2);

                const funct = this.sortAndSplit(steps);
                const functTracker1 = this.sortAndSplit(tracker1);
                const functTracker2 = this.sortAndSplit(tracker2);

                console.log(funct.timeArray);
                console.log(funct.valueArray);

                const timeArray = funct.timeArray;
                const valueArray = funct.valueArray;

                const timeArrayTracker1 = functTracker1.timeArray;
                const timeArrayTracker2 = functTracker2.timeArray;

                const valueArrayTracker1 =  functTracker1.valueArray;
                const valueArrayTracker2 =  functTracker2.valueArray;

                var data = {
                  labels: timeArrayTracker1,
                  series: [
                    valueArrayTracker1,
                    valueArrayTracker2,
                    []
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
                      legendNames: ['FITBIT', 'GOOGLE', ''],
                    }),
                    Chartist.plugins.tooltip({
                      onClick: function ()
                      {
                        
                      }
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
              }else {
                <div className="chartboxweekly">
                  <h6 className="headlinecharts">Schrittanzahl der<br />letzten 7 Tage</h6>
                  <Chart1 />
                </div>
              }
            }}
          </Query>

        </div>
      )
  }//end render
}//end component

const GET_STEPS = gql`
        query GetSteps($cookieuser: ID){
          stepsViaUser(userId: $cookieuser){
            trackerId
            time
            value
          }
        }
        `

export default BarChart;
