import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Alert from '../components/Alert'
import Trackerlist from '../components/trackermanager/Trackerlist'
import CheckLogin from '../components/CheckLogin'
import { Link } from 'react-router-dom';
// ===================
// Tracker Manager
// Trackermanager Add / Remove / Sync Trackers
// ===================

class Trackermanager extends Component{
    render(){
        return (
            <div>
              <CheckLogin />
                <div className="container">
                    <h1>Tracker-Manager</h1>
                    <h5>Alle Tracker einfach und schnell verwalten.</h5>
                    <Link to={"/trackermanager/add"}>Tracker hinzufügen</Link>

                    <Trackerlist />
                </div>
                
            </div>
        )
    }
}

export default Trackermanager;