import React, { Component } from 'react';
import Button from '../components/Button'
import Alert from '../components/Alert'
import Trackerlist from '../components/trackermanager/Trackerlist'
import CheckLogin from '../components/CheckLogin'
import { Link } from 'react-router-dom';
// ===================
// Tracker Manager
// Trackermanager Add / Remove / Sync Trackers
// ===================

class Trackermanager extends Component{
    nextPath(path) {
        this.props.history.push(path);
      }
    render(){
        return (
            <div>
              <CheckLogin />
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h1>Tracker-Manager</h1>
                            <h5>Alle Tracker einfach und schnell verwalten.</h5>
                        </div>
                        <div className="col-md-2">
                            <br />
                            <Button type="btn btn-basic" message="Tracker hinzufügen" onClick={() => this.nextPath('/trackermanager/add') }>
                                Tracker hinzufügen
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <Trackerlist />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Trackermanager;