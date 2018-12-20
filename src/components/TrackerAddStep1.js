import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Button from './Button'
import {withCookies, Cookies} from 'react-cookie';
import StepZilla from "react-stepzilla";

// ===================
// TrackerMananger
// Select account or tracker
// ===================

class TrackerAddStep1 extends Component{

    setTracker(){
        alert("Diese Funktion steht zur Zeit leider noch nicht zur Verfügung")
    }

    setAccount() {
        const cookies = new Cookies ();
        this.props.jumpToStep(2);
        cookies.set('webfit_trackerAddType', "Account", {
            path: '/'
            })
        cookies.set('webfit_trackerAddStep', "2", {
            path: '/'
            })
    }

    render(){


        return (
            <div className="text-center">
                
               <h2>Account oder Tracker?</h2>
                <h6>Bei WebFit hast Du die Möglichkeit entweder einen Tracker oder einen Fitness-Account hinzuzufügen</h6>
                <br />
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3">
                        <Button type="btn-basic disabled" onClick={this.setTracker} message="Tracker hinzufügen" />
                    </div>
                    <div className="col-md-3">
                        <Button type="btn-basic" onClick={this.setAccount} message="Account hinzufügen" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackerAddStep1;