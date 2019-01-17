import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


class StepValuesWeekly extends Component {

    constructor(props) {
        super(props);
        this.state = {
            steps: '',
        }
    }

    render() {

        const cookies = new Cookies();
        var cookieuser = cookies.get('webfit_user')

        return (
            <div>
                <Query query={GET_STEPS} variables={{ cookieuser }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        if (data.stepsViaUser.length) {

                            const steps = data.stepsViaUser;
                            const value = [];
                            if (steps) {
                                steps.forEach(function (element) {
                                    value.push(element.value);
                                })
                            }

                            const valueArray = [];
                            for (var i = 0; i < 7; i++) {
                                valueArray.push(value[i]);
                            }

                            var stepsvalueweekly = 0;
                            for (var i = 0; i < valueArray.length; i++) {
                                stepsvalueweekly = stepsvalueweekly + valueArray[i];
                            }
                            // console.log(stepsvalueweekly);

                            var distance = stepsvalueweekly * 0.65;

                            return (
                                <div className="container">
                                    <div>
                                        <div><i class="fas fa-shoe-prints"></i></div>
                                        <div></div>
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
                        } else {
                            return (
                                <div>
                                    
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
        query GetSteps($userId: ID){
          stepsViaUser(userId: $userId){
            time
            value
          }
        }
        `

export default StepValuesWeekly;
