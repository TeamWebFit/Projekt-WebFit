import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import BarChart from '../components/BarChart';
import BarChartMonthlySteps from '../components/BarChartMonthlySteps';
import StepBadgesWeekly from '../components/StepBadgesWeekly';
import StepValuesWeekly from '../components/StepValuesWeekly';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Schritte extends Component {
    render() {
        return (
            <div className="container">
            <div className="container statistiken">
            <NavLink className="backstatistiken" to="/statistiken"><i className="fa fa-angle-left"></i></NavLink>
                <h4 className="h4statistiken">Schritte</h4>
                <Tabs className="tabsschritte" defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="T">
                        <div className="grafikbox">
                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Schrittanzahl</div></div>
                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Badges</div></div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="W">
                        <div className="grafikbox">
                            {/*<BarChart />*/}
                        </div>
                        <div className="boxstatistikenValues">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Schrittanzahl</div>
                            </div>
                            <StepValuesWeekly />
                        </div>
                        <div className="boxstatistikenBadges">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Badges</div></div>
                            <StepBadgesWeekly />
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="M">
                        <div className="grafikbox">
                            <BarChartMonthlySteps />
                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Schrittanzahl</div></div>

                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Badges</div></div>

                        </div>
                    </Tab>
                    <Tab eventKey={4} title="J">
                        <div className="grafikbox">

                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Schrittanzahl</div></div>
                        </div>
                        <div className="boxstatistiken">
                            <div className="boxstatistiken2"><div className="boxstatistiken2headline">Badges</div></div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            </div>
        )
    }
}

export default Schritte;