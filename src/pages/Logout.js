import React, { Component } from 'react';
import {} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';
import {Panel, Grid, Row, Col, Button, ButtonToolbar, Label} from 'react-bootstrap';

// ===================
// Logout Page
// Component which loggs you out.
// ===================

class Logout extends Component{
    render(){
        const cookies = new Cookies ();
        cookies.remove('webfit_user');  
        return (
            <div>
                <Grid>
                    <Row>
                        <Col className="text-center">
                            <h2>Bis bald :)!</h2>
                            <p>Die Abmeldung von Deinem WebFit Account war erfolgreich. Wir freuen uns Dich bald wieder bei WebFit begrüßen zu dürfen.</p>
                            <Link to={"/login"}>Hier geht's zum Login</Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Logout;