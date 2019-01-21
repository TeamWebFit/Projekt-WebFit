import React, { Component } from 'react';
import { Panel, Button, Grid, Row, Col, ButtonToolbar, Label } from 'react-bootstrap';
import gql from "graphql-tag";
import { Query, Mutation } from 'react-apollo';
import ReactLoading from 'react-loading';
import { withCookies, Cookies } from 'react-cookie';
// ===================
// Tracker Manager - Add Page
// Demo for adding Samsung to TrackerManager
// ===================

class TrackerManagerConnectorSamsung extends Component {

    
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {

        var Cookie = new Cookies();
        let userId = Cookie.get('webfit_user')
        var trackerModelID = Cookie.get('webfit_setup');

        const ADD_TRACKER = gql`
        mutation createTracker($trackerModelID: ID!, $userId: ID!) {
            createTracker(
            trackerModelID: $trackerModelID,
            userId: $userId
            )
            {
                id
            }
        }
        `;

        return (
            <Grid>
                <Row>

                    <div className="karte2">
                        <section className="karteTm">
                            <div className="TrackerPic">
                            </div>
                            <div className="Tm_body">
                                <div className="col-md-12">
                                    <h1>Tracker-Manager Samsung</h1>
                                    <h5>Einfach und schnell Samsung-Tracker mit Tizen-Betriebssystem hinzufügen</h5>
                                </div>
                                <div className="col-md-12 top-abstand text-center">
                                    <div className="col-md-4">
                                        <b>1 <br /><br />
                                            Tracker-App installieren
                                        </b><br />
                                        Installiere dir die kostenlose App "WebFit4Samsung" auf Deiner Sasmung-Watch.
                                    </div>
                                    <div className="col-md-4">
                                    <b>2 <br /><br />
                                           TrackerID eintragen
                                        </b><br />
                                        Beim ersten Öffnen der Anwendung sowie unter Einstellungen findest Du Deine TrackerID.<br />
                                        <input type="text" placeholder="Tracker-ID" required={true} name="trackerid"/>
                                    </div>
                                    <div className="col-md-4">
                                    <b>3 <br /><br />
                                           Fertig
                                        </b><br />
                                        Du kannst Deine Aktivitäten jetzt einfach mit der WebFit4Samsung App tracken und anschließend synchronisieren.
                                         </div>
                                </div>
                                <div className="col-md-12 top-abstand text-center">
                                <Mutation
                                    mutation={ADD_TRACKER}
                                    >
                                    {(createTracker, { data }) => (
                                        <Button bsStyle="success"
                                        onClick={e => {
                                            createTracker({
                                            variables: {
                                                trackerModelID,
                                                userId
                                            }
                                            }).then(function(){
                                              //  console.log("Abgeschickt")
                                                document.location.href='/trackermanager/add/success';
                                            });
                                        }}
                                        >Tracker hinzufügen</Button>            
                                    )}
                                </Mutation>
                                </div>
                            </div>
                        </section>
                    </div>
                </Row>
            </Grid>
        )
    }
}

export default TrackerManagerConnectorSamsung;