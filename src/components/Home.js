import React, { Component } from 'react';
import {CarouselItem, Carousel, Row, Col} from 'react-bootstrap';
import Calendar from 'react-calendar';
import '../App.css';
import Desktopbg from '../assets/img/Desktop_background.png';
import kachel from '../assets/img/Group2.png';
import kachelsquare from '../assets/img/ActivityCard.png';
import Header from './Header';
import Footer from './Footer';
import CheckLogin from '../components/CheckLogin'
import BarChart from './BarChart';

class Home extends Component{
    state = {
        date: new Date(),
    }
    
    onChange = date => this.setState({ date })

    constructor(props) {
        super(props);
        this.state = { values: [] };
    }

    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
               <input type="textarea" value={el||'Add workouts'} onChange={this.handleChange.bind(this, i)} />
               <input type="submit" value="Submit" />
            </div>          
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }
  
    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
      
    render(){
        return (
            <div className = "Home">
            
             <CheckLogin />
                <div className="container">
                    <Row className="row">
                        <Col xs={12} sm={6} md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <BarChart />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <BarChart />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <BarChart />
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                        <br />
                        <br />
                        <br />

                        <Col sm={6} md={6} className="col">
                            <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                            />
                        </Col>
                    </Row>

                    <br />
                    <br />
                    <br />

                    <Row className="row rmobile">
                        <Col xs={12} sm={6} md={6} className="col kSquare">
                            <div className="kachelnSquare">
                                <img src={kachelsquare} width="20%" height="auto" alt="Card image"/>
                                <img src={kachelsquare} width="20%" height="auto" alt="Card image"/>
                                <img src={kachelsquare} width="20%" height="auto" alt="Card image"/>
                                <img src={kachelsquare} width="20%" height="auto" alt="Card image"/>
                            </div>
                        
                            <div className="kacheln">
                                <img src={kachel} width="35%" height="auto" alt="Card image"/>
                                <img src={kachel} width="35%" height="auto" alt="Card image"/>
                                <img src={kachel} width="35%" height="auto" alt="Card image"/>
                                <img src={kachel} width="35%" height="auto" alt="Card image"/>
                            </div>
                        </Col>

                        <Col  sm={6} md={6} className="col">
                            <form className="calendar_form" id="myform">
                            {this.createUI()}  
                                <p>
                                    <button type="button" className="btn_calendar" onClick={this.addClick.bind(this)} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fa fa-plus-circle addWorkout"></i>
                                    </button>
                                </p>
                                <output id="datum" size="30" />
                            </form>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;