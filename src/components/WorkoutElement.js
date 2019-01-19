import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from './Alert'
import Button from './Button'
import CheckLogin from './CheckLogin'

// ===================
// Workouts Page
// A page for testing all components
// ===================

class Workouts extends Component {
    render() {

        // if (this.props.workouts) {
        console.log(this.props.workout)
        const yourworkout = this.props.workout.map(workout => (
            <div>
                <hr />
                <div className="">
                    <div className="">
                        <p><i className="fa fa-bicycle line-icon"></i>{workout.title}</p>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <p><i className="fa fa-calendar line-icon"></i>{workout.date}</p>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <p><i className="fa fa-history line-icon"></i>{workout.time} min</p>                    </div>
                </div>
            </div>
        ))
        
        // }
        return (

            <div>
                <CheckLogin />
                <div className="container">
                    <div className="karte2-loggedout">
                        <section className="karteLogin">
                            <div className="loginPic"></div>
                            <div className="login_body">
                                <h2>Deine Workouts</h2>

                                {yourworkout}
                                <hr />
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        )
    }
}



export default Workouts;