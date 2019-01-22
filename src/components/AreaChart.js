import React, { Component } from 'react';
import Chartist from 'chartist';
import Chart2 from 'react-chartist';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Tabs, Tab } from 'react-bootstrap';
import { Query } from 'react-apollo';
import { withCookies, Cookies } from 'react-cookie';
import { } from 'chartist-plugin-tooltips';
import date from 'date-and-time';

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
    console.log(cookieuser);
    
    return(
      <div>
        <Query query={HEARTRATE_QUERY} variables={{ cookieuser }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              console.log(data.heartRateViaUser);
              
              if(data.heartRateViaUser === null || data.heartRateViaUser.length === 0) {
                return (
                  <div className="container chartbox">
                   <h6 className="headlinecharts">Puls der<br />letzten 7 Tage</h6>
                    <div className="area1"></div>
                  </div>
                )
              }else{
                  const heartrate = data.heartRateViaUser;

                  function compare(a,b) {
                    if (a.time < b.time)
                      return -1;
                    if (a.time > b.time)
                      return 1;
                    return 0;
                  }
                  const sortedHeartrate= heartrate.sort(compare);
                  const dayValue = [];
                  const dayChart = [];
                  const counterArray = [];
                  var counter = 0;
                  var valueHeartrate = 0;
  
                  var start = sortedHeartrate[sortedHeartrate.length-1].time //aktuellster Zeitpunkt
                  var startDate = new Date(parseInt(start)); //aktuellster Zeitpunkt als DateObjekt
                  console.log("Startdatum: "+startDate);
                  var startDateTemp = new Date(parseInt(start));
  
                  var startDate0000 = startDateTemp.setHours(0,0,0,0);
                  var startDate0000Test = new Date(startDate0000);
                  console.log("Startdatum 0000: "+startDate0000Test);
  
  
                  for (var j = 1; j < sortedHeartrate.length; j++) {
                    var elementTime = sortedHeartrate[sortedHeartrate.length-j].time; //Jedes Elemt des Arrays
                    var elementValue = sortedHeartrate[sortedHeartrate.length-j].value;
  
                      if(elementTime <= startDate && elementTime > startDate0000Test){
                        var valueElem = parseInt(elementValue);
                        valueHeartrate = valueHeartrate + valueElem;
                        counter++;
                      }
                  }
                  counterArray.push(counter);
                  counter = 0;
                  dayValue.push(valueHeartrate);
                  dayChart.push(startDate.getDay());
                  valueHeartrate = 0;

                  for (var i = 0; i < 6; i++) {
  
                    let tagXanfang = date.addDays(startDate0000Test, -i);
  
                    let tagXende = date.addDays(startDate0000Test, -i-1); //ein Tag vor aktuellster Zeitpunkt
  
                    for (var j = 1; j < sortedHeartrate.length; j++) {
                      var elementTime = sortedHeartrate[sortedHeartrate.length-j].time; //Jedes Elemt des Arrays
                      var elementValue = sortedHeartrate[sortedHeartrate.length-j].value;
  
                        if(elementTime <= tagXanfang && elementTime > tagXende){
                          var valueElem = parseInt(elementValue);
                          valueHeartrate = valueHeartrate + valueElem;
                          counter++;
                        }

                    }

                    dayValue.push(valueHeartrate);
                    dayChart.push(tagXende.getDay());
                    valueHeartrate = 0;
                    counterArray.push(counter);
                    counter = 0;
                  }
                  
                  // Durchschnitts Berechnung 
                  for (var i = 0; i < dayValue.length; i++){
                      var x = Math.round(dayValue[i] / counterArray[i]);
                     dayValue[i] = x;
                  }
                  
  
                  const timeArray = [];
                  const valueArray = [];
                  
                  for (var i = 1; i <= dayValue.length; i++) {
                    valueArray.push(dayValue[dayValue.length-i]);
                  }
  
                  for (var i = 1; i < dayChart.length+1; i++) {
                    switch (dayChart[dayChart.length-i]) {
                      case 0:
                        timeArray.push("So");
                        break;
                      case 1:
                        timeArray.push("Mo");
                      break;
                      case 2:
                        timeArray.push("Di");
                      break;
                      case 3:
                        timeArray.push("Mi");
                      break;
                      case 4:
                        timeArray.push("Do");
                      break;
                      case 5:
                        timeArray.push("Fr");
                      break;
                      case 6:
                        timeArray.push("Sa");
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
                    showArea: false,
                    showLine: true,
                    showPoint: true,
                    fullWidth: true,
                    height: '220px',
                    axisX: {
                      showLabel: true,
                      showGrid: true
                    },
                    plugins: [
                      Chartist.plugins.tooltip()
                    ]
                  };

                  var type = 'Line'

                  return (
                    <div className="container chartbox">
                      <h6 className="headlinecharts">Puls der<br />letzten 7 Tage</h6>
                      <div className="area1"><Chart2 data={data} options={options} type={type} /></div>
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
  query HeartrateQuery($cookieuser: ID) {
      heartRateViaUser(userId: $cookieuser) {
          time
          value
          trackerId
        }
      }
    `

export default AreaChart;
