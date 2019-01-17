import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Statistiken extends Component {
    render() {
        return (
            <div>
            <div className="karte2">
                    <section className="karteHome">
                        <div className="home_body">
            <div className="container">
                <div className="row">
                    <NavLink to="/puls">
                        <div className=".col-md-2 statistikenbox1">
                            <i className="fa fa-heartbeat heartbeaticon"></i>
                            <div className="textstatistikenicon2">
                                <p className="textstatistikenicon">Puls</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/schritte">
                        <div className=".col-md-2 statistikenbox2">
                            <i className="fa fa-balance-scale"></i>
                            <div className="textstatistikenicon2">
                                <p className="textstatistikenicon">Schritte</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/gewicht">
                        <div className=".col-md-2 statistikenbox3">
                            <i class="fa fa-balance-scale waageicon"></i>
                            <div className="textstatistikenicon2">
                                <p className="textstatistikenicon">Gewicht</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            </div>
            </section>
            </div>
            </div>
        )
    }
}

export default Statistiken;