import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


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


    render() {

        const cookies = new Cookies();
        var cookieuser = cookies.get('webfit_user')
        console.log(cookieuser);
        

        return (
            <div>
                <Query query={GET_STEPS} variables={{ cookieuser }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        console.log(data.stepsViaUser);

                        if (data.stepsViaUser.length) {
                            
                            const steps = data.stepsViaUser;
                            const time = [];
                            const value = [];

                            if (steps) {
                                steps.forEach(function (element) {
                                    value.push(element.value);
                                    time.push(element.time);
                                })
                            }

                            const timenumber = 0;
                            var lasttime = time [0];
                            var b1 = lasttime-10080;
                            
                            //console.log(b1);

                            for (var i = 0; i < time.length; i++) {
                                if (lasttime-10080){
                                    timenumber+1;
                                }
                            }

                            //console.log(timenumber);

                            const valueArray = [];
                            for (var i = 0; i < timenumber; i++) {
                                valueArray.push(value[i]);
                            }

                            var stepsvalueweekly = 0;
                            for (var i = 0; i < valueArray.length; i++) {
                                stepsvalueweekly = stepsvalueweekly + valueArray[i];
                            }

                            var distance = stepsvalueweekly * 0.65;   

                            return (
                                <div className="container">
                                    <div>
                                        <div><i className="fa fa-trophy"></i></div>
                                        <div>{stepsvalueweekly}</div>
                                    </div>
                                    <div>
                                        <div>{distance} m</div>
                                        <div>Es fehlen noch 344 Schritte für dein tägliches Ziel </div>
                                        <div>2.050 Schritte mehr als Gestern </div>
                                        <div>15-16 Uhr hast du am meisten Schritte absolviert</div>
                                        <div>Alle Daten Ansehen</div><i class="la la-angle-right"></i>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="container">
                                    <div>
                                        <div><i className="fa fa-trophy"></i></div>
                                        <div>15000</div>
                                    </div>
                                    <div>
                                        <div>6 km</div>
                                        <div>Es fehlen noch 344 Schritte für dein tägliches Ziel </div>
                                        <div>2.050 Schritte mehr als Gestern </div>
                                        <div>15-16 Uhr hast du am meisten Schritte absolviert</div>
                                        <div>Alle Daten Ansehen</div><i class="la la-angle-right"></i>
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
        query GetSteps($cookieuser: ID){
          stepsViaUser(userId: $cookieuser){
            time
            value
          }
        }
        `

export default StepValuesWeekly;
