import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { Panel, Grid, Row, Col, Button, ButtonToolbar, Label } from 'react-bootstrap';

// ===================
// Logout Page
// Component which loggs you out.
// ===================

class Logout extends Component {
    render() {
        const cookies = new Cookies();
        cookies.remove('webfit_user');
        return (

            <div className="container text-center">
                <div className="karte2">
                    <section className="karteLogout">
                    <div className="loginPic"></div>
                        <div className="logout_body">
                        <br /><br />
                            <h2>Bis bald! :)</h2>
                            <p>Die Abmeldung von Deinem WebFit Account war erfolgreich. Wir freuen uns Dich bald wieder bei WebFit begrüßen zu dürfen.</p>
                            <Link to={"/login"}>Hier geht's zum Login</Link>
                            <br /><br /><br />
                        </div>
                    </section>
                </div >
            </div >

        )
    }
}

export default Logout;