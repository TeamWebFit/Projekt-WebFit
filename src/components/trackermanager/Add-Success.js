import React, { Component } from 'react';
import {} from 'react-bootstrap';
import {Row, Col, Grid, Well} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// ===================
// Trackermanager - Add Page
// Add a new Tracker & Account to Webfit
// ===================

class TrackerManagerAddSuccess extends Component{
    render(){
        return (
         <div>
             <div className="container">
                    <div className="karte2">
                        <section className="karteDatenschutz">
                            <div className="datenschutz_body">
             <Grid>
                 <Row>
                     <Col md={12} className="text-center">
                     <h2>🎉🎉Wohooo!</h2>
                     <h5>Dein neuer Tracker wurde erfolgreich hinzugefügt</h5>
                     <Link to="/trackermanager">Zum Trackermanager</Link>
                     </Col>
                 </Row>
             </Grid>
             </div>
             </section>
             </div>
             </div>
         </div>
        )
    }
}

export default TrackerManagerAddSuccess;