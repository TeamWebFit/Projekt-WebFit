import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from '../components/Alert'
import Button from '../components/Button'
import CheckLogin from '../components/CheckLogin'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withCookies, Cookies } from 'react-cookie';
import WorkoutElement from '../components/WorkoutElement';


// ===================
// Stepslist Page
// ===================

class Workouts extends Component {
    render() {
        const cookies = new Cookies();
        var cookieuser = cookies.get('webfit_user');
        console.log(cookieuser);
        return (

            <div>
                <CheckLogin />
                <Query query={getWorkouts} variables={{ cookieuser }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        if (data.workout.length > 0) {
                            var workout = data.workout;
                            
                            return console.log(workout);
                        } else {
                            return (<div>
                                <CheckLogin />
                                <div className="container">
                                    <div className="karte2">
                                        <section className="karteTm">
                                            <div className="workoutPic"></div>
                                            <div className="Tm_body">
                                                <h2>Deine Schritte</h2>
                                                <hr />
                                                <p>Keine Schritte synchronisiert</p>
                                                <hr />
                                            </div>
                                        </section>
                                    </div>
                                </div>

                            </div>)
                        }
                    }}
                </Query>
            </div>
        )
    }
}


const getWorkouts = gql`
        query getWorkouts($cookieuser: ID){
          workout(userId: $cookieuser){
            time
            date
            title
          }
        }
        `

export default Workouts;