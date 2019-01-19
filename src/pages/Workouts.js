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
// Workouts Page
// A page for testing all components
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
                            console.log(workout);
                            return <WorkoutElement workout={workout} />
                        } else {
                            return (<div>
                                <CheckLogin />
                                <div className="container">
                                    <div className="karte2-loggedout">
                                        <section className="karteLogin">
                                            <div className="loginPic"></div>
                                            <div className="login_body">
                                                <h2>Deine Workouts</h2>
                                                <hr />
                                                <p>Es sind noch keine Workouts eingetragen</p>
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