import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import date from 'date-and-time';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';


class StepValuesWeekly extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepsvalueweekly: this.props.stepsvalueweekly,
            distance: this.props.distance,
            moststeps: this.props.moststeps,
            dailygoal: this.props.dailygoal,
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

        var trackerId = "5c43175387259107e4419cb5";
        if(this.props.tracker){
            trackerId = this.props.tracker[0].id;
        }
        

        return (
            <div>
                <Query query={GET_STEPS} variables={{ trackerId }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>

                        if ( data.stepsViaTracker === 0 || data.stepsViaTracker.length <= 0 ) {
                            return (
                                <div className="container">
                                    <div>
                                        <p>Kein Tracker ausgewählt</p>
                                    </div>
                                </div>
                            )
                        }else{
                            const steps = data.stepsViaTracker;
                            const time = [];
                            const value = [];
                            console.log(steps);
                            
                            const functTracker = this.sortAndSplit(steps);
                            const timeArrayTracker1 = functTracker.timeArray;
                            const valueArrayTracker1 =  functTracker.valueArray;

                            //Schritte von der Woche
                            var stepsvalueweekly = 0;
                                for (var i = 0; i < valueArrayTracker1.length; i++) {
                                var step = parseInt(valueArrayTracker1[i]);
                                stepsvalueweekly = stepsvalueweekly + step;
                            }

                            console.log(stepsvalueweekly);
                            

                            //in Kilometer umwandeln
                            var distance = Math.round((stepsvalueweekly * 0.65)/1000);  
                            var distanceRound = distance.toFixed(1); 


                            //Differenz zum vorherigen Tag
                            var lastDay = parseInt(valueArrayTracker1[valueArrayTracker1.length-1]); //"heute"/letzter gesyncte Tag
                            var beforeLastDay = parseInt(valueArrayTracker1[valueArrayTracker1.length-2]);//"gestern"/Tag davor
                            var diff = lastDay - beforeLastDay;
                            var dayTitle = timeArrayTracker1[timeArrayTracker1.length-2];

                            console.log("Differenz: "+diff);
                            var satz = '';
                            if(diff < 0){
                                satz = (diff*(-1)) + " Schritte weniger als " + dayTitle
                            }else{
                                satz = diff + " Schritte mehr als " + dayTitle
                            }

                            return (
                                <div className="container">
                                    <div>
                                        <div>{stepsvalueweekly} Schritte </div>
                                    </div>
                                    <div>
                                        <div className="stepsinfo">Das entspricht ca. {distanceRound} km</div>
                                        <div className="stepsinfo">{satz}</div>
                                        <div className="stepsinfo">Es fehlen noch --- Schritte für dein tägliches Ziel </div>
                                        <div className="stepsinfo">Zwischen ----- Uhr hast du am meisten Schritte absolviert</div>
                                        <div className="stepsinfo"><NavLink to="/schritteliste">Alle Daten Ansehen</NavLink><i className="fa fa-angle-right stepsArrowIcon"></i></div>
                                    </div>
                                </div>
                            )
                        } 
                    }}
                </Query>
            </div>
        )
    }//end render
}//end component

const GET_STEPS = gql`
        query GetSteps($trackerId: ID){
          stepsViaTracker(trackerId: $trackerId){
            time
            value
          }
        }
        `

export default StepValuesWeekly;
