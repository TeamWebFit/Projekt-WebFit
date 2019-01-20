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

class Goals extends Component {
    render() {
        const cookies = new Cookies();
        var cookieuser = cookies.get('webfit_user');
        console.log(cookieuser);
        return (

            <div>
                <CheckLogin />
                <div className="container">
                    <div className="karte2">
                        <section className="karteTm">
                            <div className="workoutPic"></div>
                            <div className="Tm_body">
                                <h2>Deine Ziele</h2>
                                <hr />
                                <p>Es sind noch keine Ziele festgelegt</p>
                                <hr />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}



export default Goals;