import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, ButtonToolbar, Label} from 'react-bootstrap';
import TrackerElement from './TrackerElement';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import TrackerNull from './TrackerNull';
import ReactLoading from 'react-loading';
import {withCookies, Cookies} from 'react-cookie';
// ===================
// Tracker Manager
// List all Trackers from a user
// ===================


var Cookie = new Cookies();
let user = Cookie.get('webfit_user')

const getTracker = gql`
query user($user: ID){
    user(id: $user){
    id
      tracker{
        id,
        lastSync,
        createdAt,
        trackerModel{
          type, 
          manufacturer
        }
      }
    }
  }
`;

class Trackerlist extends Component{


    formData(tracker){
        var dateFormat = require('dateformat');
        var intlastSync = parseInt(tracker.lastSync);
        var badsyncdate = new Date(intlastSync);
        var cooldate = dateFormat(badsyncdate, "dd.mm.yyyy HH:MM:ss");
        
        var intcreatedAt = Date.parse(tracker.createdAt);
        var badcreatedate = new Date(intcreatedAt)
        var adddate = dateFormat(badcreatedate, "dd.mm.yyyy");
        //console.log("cooldate" + cooldate)

        return(
            <TrackerElement key={tracker.id} trackername={tracker.trackerModel.type} manufacturer={tracker.trackerModel.manufacturer} adddate={adddate} lastsyncdate={cooldate} errortext="0 Fehler" errorcolor="success" user={user} trackerid={tracker.id} />
        )
    }

    render(){
        console.log("Aktueller User:" + user)
        return (
            <Grid>
                <Row className="top-abstand">
                
                    <Query query={getTracker} variables={{ user }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `GRAPHQL FEHLER! ${error.message}`;
                            
                            if(data.user == null){
                                window.location.reload();
                            }

                            // Abfrage ob Tracker vorhanden sind
                            if (data.user.tracker.length === 0){
                                console.log('kein Tracker vorhanden')
                              return(
                                    <div>
                                        
                                        <TrackerNull />
                                    </div>
                                )
                            }else{
                                return (
                                    <div>
                                        {data.user.tracker.map(tracker => (
                                            this.formData(tracker)
                                            
                                        ))}
                                    </div>
                                );
                            }
                            }}
                    </Query>
                </Row>

                
                </Grid>
        )
    }
}

export default Trackerlist;