import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, ButtonToolbar, Label} from 'react-bootstrap';
import TrackerElement from './TrackerElement';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import TrackerNull from './TrackerNull';
import ReactLoading from 'react-loading';
// ===================
// Tracker Manager
// List all Trackers from a user
// ===================


// DEMO ONLY 
// Hier wird normalerweise der User aus den Cookies ausgelesen
let user = "5bf6d1f1ec80155fbc35ec84"
// DEMO ONLY END

const getTracker = gql`
query tracker($user: ID){
    user(id: $user){
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

    render(){
        console.log(user)
        return (
            <Grid>
                <Row className="top-abstand">
                    <Query query={getTracker} variables={{ user }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `Error! ${error.message}`;
                            
                            console.log(data)

                            // Abfrage ob Tracker vorhanden sind
                            if (data.user.tracker.length === 0){
                              return(
                                    <div>
                                        <TrackerNull />
                                    </div>
                                )
                            }else{
                                console.log(data.user.tracker[0].id)
                                return (
                                    <div>
                                        
                                        {data.user.tracker.map(tracker => (
                                        <TrackerElement key={data.user.tracker[0].id} trackername={data.user.tracker[0].trackerModel.type} manufacturer={data.user.tracker[0].trackerModel.manufacturer} adddate={data.user.tracker[0].createdAt} lastsyncdate={data.user.tracker[0].lastSync} errortext="0 Fehler" errorcolor="success" user={user} trackerid={data.user.tracker[0].id} />
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