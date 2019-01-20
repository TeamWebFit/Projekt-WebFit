import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BarChart from '../components/BarChart'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Gewicht extends Component {
    render() {
        return (
            <div className="container statistiken">
            <NavLink className="backstatistiken" to="/statistiken"><i class="fa fa-angle-left"></i></NavLink>
                <h4 className="h4statistiken">Gewicht</h4>
                <Tabs className="tabsschritte" defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="T">
                        <div className="gewichtbox">
                            <div className="gewichtbox2">
                                <div className="boxstatistiken2headline">Gewichtsverlauf</div>
                            </div>
                            <BarChart />
                            <div className="midtextbox">
                                {/* Datum auswahl */}
                            </div>
                            <div className="gewichtsabzu1">Gewichtsabnahme/Gewichtszunahme</div>
                            <div className="gewichtsabzu2">2000 g</div>
                            {/* chart */}
                        </div>
                        <div className="bmistats">
                            <h5 className="bmistats2"><div className="boxstatistiken2headline">BMI</div></h5>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="W">
                        <div className="gewichtbox">
                            <div className="gewichtbox2">
                                <div className="boxstatistiken2headline">Gewichtsverlauf</div>
                            </div>
                            <BarChart />
                            <div className="midtextbox">
                                {/* Datum auswahl */}
                            </div>
                            <div className="gewichtsabzu1">Gewichtsabnahme/Gewichtszunahme</div>
                            <div className="gewichtsabzu2">2000 g</div>
                            {/* chart */}
                        </div>
                        <div className="bmistats">
                            <h5 className="bmistats2"><div className="boxstatistiken2headline">BMI</div></h5>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="M">
                        <div className="gewichtbox">
                            <div className="gewichtbox2">
                                <div className="boxstatistiken2headline">Gewichtsverlauf</div>
                            </div>
                            <BarChart />
                            <div className="midtextbox">
                                {/* Datum auswahl */}
                            </div>
                            <div className="gewichtsabzu1">Gewichtsabnahme/Gewichtszunahme</div>
                            <div className="gewichtsabzu2">2000 g</div>
                            {/* chart */}
                        </div>
                        <div className="bmistats">
                            <h5 className="bmistats2"><div className="boxstatistiken2headline">BMI</div></h5>
                        </div>
                    </Tab>
                    <Tab eventKey={4} title="J">
                        <div className="gewichtbox">
                            <div className="gewichtbox2">
                                <div className="boxstatistiken2headline">Gewichtsverlauf</div>
                            </div>
                            <BarChart />
                            <div className="midtextbox">
                                {/* Datum auswahl */}
                            </div>
                            <div className="gewichtsabzu1">Gewichtsabnahme/Gewichtszunahme</div>
                            <div className="gewichtsabzu2">2000 g</div>
                            {/* chart */}
                        </div>
                        <div className="bmistats">
                            <h5 className="bmistats2"><div className="boxstatistiken2headline">BMI</div></h5>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Gewicht;