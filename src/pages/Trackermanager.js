import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import Trackerlist from '../components/Trackerlist'
import CheckLogin from '../components/CheckLogin'
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

                    <Trackerlist />
                </div>
                
            </div>
        )
    }
}

export default Trackermanager;