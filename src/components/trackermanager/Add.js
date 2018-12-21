import React, { Component } from 'react';
import {Row, Col, Grid, Well} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {withCookies, Cookies} from 'react-cookie';
import ReactLoading from 'react-loading';
import Button from '../Button';


// ===================
// Trackermanager - Add Page
// Add a new Tracker & Account to Webfit
// ===================

class TrackerManagerAdd extends Component{

    nextPath(path) {
        this.props.history.push(path);
      }


    componentDidMount(){
        const cookies = new Cookies();
        var cookie_type = cookies.get('webfit_setup');
        console.log("Cookie: "+ cookie_type)

        if (cookie_type != undefined){
            console.log("Cookie wird gelöscht")
            cookies.remove('webfit_setup')
            console.log("Cookie wurde gelöscht")
        }
    }
    

    render(){    
            const getTrackerTypes = gql`
            query getTrackerTypes {
                allTrackerModels {
                  id
                  manufacturer
                  type
                  authLink
                }
              }
            `;


        return (
         <div>
             <Grid>
                <Row>
                    <Col xs={12}>
                        <h2>Welchen Tracker möchtest Du hinzufügen?</h2>
                        <Query query={getTrackerTypes}>
                            {({ loading, error, data }) => {
                            if (loading) return (
                                <ReactLoading type="spinningBubbles" color="#000000" height={'10%'} width={'10%'} />
                            );
                            if (error) return `GRAPHQL FEHLER! ${error.message}`;
                            
                            var trackermodell = data.allTrackerModels
                           // console.log(data.allTrackerModels[0].manufacturer)
                            return(
                                <Col>
                                
                                     {trackermodell.map(trackermodell => (
                                    <Col sm={3} xs={12}>
                                        <Well key={trackermodell.id} onClick={() => { 
                                                                                    const cookies = new Cookies();
                                                                                    cookies.set('webfit_setup', trackermodell.id, {
                                                                                        path: '/'
                                                                                        })
                                                                                        document.location.href=trackermodell.authLink;
                                                                                    }}>
                                           
                                            <b>{trackermodell.manufacturer} {trackermodell.type}</b>
                                            <br />
                                            
                                        </Well>
                                    </Col>
                                        ))}
                                </Col>
                            )
                        
                            }
                        }
                        </Query>
                    </Col>
                </Row>
                <Row className="trackermanager-back-button">
                    <Col md={5}>
                    <Button type="btn btn-whiteline" message="Zurück zum Trackermanager" onClick={() => this.nextPath('/trackermanager/') }>
                                Zurück
                            </Button>
                    </Col>
                </Row>
            </Grid>
         </div>
        )
    }
}



export default TrackerManagerAdd;