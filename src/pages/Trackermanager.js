import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import Trackerlist from '../components/Trackerlist'

// ===================
// Tracker Manager
// Trackermanager Add / Remove / Sync Trackers
// ===================

class Trackermanager extends Component{
    render(){
        return (
            <div>
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