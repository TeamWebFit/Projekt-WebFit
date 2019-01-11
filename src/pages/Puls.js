import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Puls extends Component {
    render() {
        return (
            <div className="container statistiken">
            <NavLink className="backstatistiken" to="/statistiken"><i class="fa fa-angle-left"></i></NavLink>
                <h4 className="h4statistiken">Puls</h4>
                <Tabs className="tabsschritte" defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="T">
                        <div className="grafikbox">

                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Werte</div></h5>
                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Zonen</div></h5>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="W">
                        <div className="grafikbox">
                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Werte</div></h5>
                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Zonen</div></h5>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="M">
                        <div className="grafikbox">
                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Werte</div></h5>

                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Zonen</div></h5>

                        </div>
                    </Tab>
                    <Tab eventKey={4} title="J">
                        <div className="grafikbox">

                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Werte</div></h5>
                        </div>
                        <div className="boxstatistiken">
                            <h5 className="boxstatistiken2"><div className="boxstatistiken2headline">Zonen</div></h5>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Puls;