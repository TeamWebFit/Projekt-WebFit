import React, { Component } from 'react';
import { CarouselItem, Carousel, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import '../App.css';
import Desktopbg from '../assets/img/Desktop_background.png';
import kachel from '../assets/img/Group2.png';
import kachelsquare from '../assets/img/ActivityCard.png';
import Header from './Header';
import Footer from './Footer';
import CheckLogin from '../components/CheckLogin'
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import KachelBMI from './KachelBMI';
import KachelWeight from './KachelWeight';
import KachelHeartRate from './KachelHeartRate';
import KachelSteps from './KachelSteps';
import AddWorkout from './AddWorkout';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Tabs, Tab } from 'react-bootstrap';

class Home extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    constructor(props) {
        super(props);
        this.state = { values: [] };
    }

    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="textarea" value={el || 'Add workouts'} onChange={this.handleChange.bind(this, i)} />
                <input type="submit" value="Submit" />
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }


    render() {
        var userId = "";
        if(this.props.user){
          var user = this.props.user
          console.log(user);
          userId = this.props.user.id;
        }

        return (
            <div className="Home">
                <div className="karte2">
                    <section className="karteHome">
                        <div className="home_body">
                            <CheckLogin />
                            <div className="container">
                                <Row className="row">
                                    <Col xs={12} sm={6} md={6}>
                                        <Col xs={12} sm={12} md={12}>
                                            <Tabs className="tabsschritte" defaultActiveKey={1} id="uncontrolled-tab-example">
                                                <Tab eventKey={1} className="tabHome" title="Schritte">
                                                    <BarChart user={user} />
                                                </Tab>
                                                <Tab eventKey={2} className="tabHome" title="Puls">
                                                    <AreaChart user={user} />
                                                </Tab>
                                                <Tab eventKey={3} className="tabHome" title="Ziele">
                                                    <BarChart user={user} />
                                                </Tab>
                                            </Tabs>

                                        </Col>

                                        <Col xs={12} sm={12} md={12} className="col kSquare">
                                            <div className="kachelnSquare">
                                                <div className="kachelStatistik kachelstat1">
                                                    <KachelBMI user={user} />
                                                </div>
                                                <div className="kachelStatistik kachelstat2">
                                                    <KachelWeight user={user} />
                                                </div>
                                                <div className="kachelStatistik kachelstat3">
                                                    <KachelHeartRate user={user} />
                                                </div>
                                                <div className="kachelStatistik kachelstat4">
                                                    <KachelSteps user={user} />
                                                </div>
                                            </div>
                                        </Col>
                                    </Col>
                                    <br />
                                    <br />
                                    <br />

                                    <Col sm={6} md={6} className="col">
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                        <br />
                                          <AddWorkout />
                                    </Col>
                                </Row>

                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}


export default Home;
