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

    render(){
        console.log("Aktueller User:" + user)
        return (
            <Grid>
                <Row className="top-abstand">
                {console.log('jetzt query')}
                    <Query query={getTracker} variables={{ user }}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `GRAPHQL FEHLER! ${error.message}`;
                            
                            console.log(data.user.tracker)

                            // Abfrage ob Tracker vorhanden sind
                            if (data.user.tracker.length === 0){
                                console.log('kein Tracker vorhanden')
                              return(
                                    <div>
                                        
                                        <TrackerNull />
                                    </div>
                                )
                            }else{
                                console.log('Tracker ist vorhanden')
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