import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, ButtonToolbar, Label, Alert} from 'react-bootstrap';
import axios from 'axios';
import RemoveButton from './TrackerRemoveButton';
import Modal from 'react-awesome-modal';

// ===================
// Tracker Manager
// TrackerElement for Tracker List
// ===================

class TrackerElement extends Component{

    constructor(props){
        super(props);
        this.state = {
               data: '',
               isLoading: false,
               error: undefined,
               visible : false,
               timeout: false
         };
         this.click = this.click.bind(this);
  }

  openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

click() {

    // Basics
    this.setState({ isLoading: true });
    let url = "https://server.webfit.app:4009/sync?user=" + this.props.user + "&trackerid=" + this.props.trackerid
    //console.log(url)
    
    // HTTP API Request
    axios.get(url, {})
      .then((response) => {
            this.setState({ data: response.data, isLoading: false });
            if (this.state.data === "Error #03 - Timeout"){
                this.setState({timeout: true})
            }else if (this.state.data.includes("Error") == true){
                this.setState({error: true})
            }else{
                this.setState({error: false})
                

            }
       })
      .catch((err) => {
            this.setState({ data: err, isLoading: false });
       });
}

    render(){
        //console.log("State"+ this.state.error)
        // Error Darstellung
        let MessageBox
        if(this.state.error === true){
            MessageBox = <Alert bsStyle="danger">
                            <strong>Ein Fehler ist aufgetreten :(</strong><br /> {this.state.data}
                        </Alert>
        
        }else if (this.state.timeout === true){
            MessageBox = <Alert bsStyle="warning">
                           Zur Zeit ist eine Synchronisierung nur alle 5 Minuten möglich.
                        </Alert>
        }else if (this.state.error === false){
            MessageBox = <Alert bsStyle="success">
                            Tracker erfolgreich synchronisiert.
                        </Alert>
        }
        // Rendering 
        return (
                    <Col xs={12} md={6} className="tracker-element">
                        <Panel>
                            <Panel.Body>
                            {MessageBox}
                                <h4>
                                   {this.props.manufacturer} {this.props.trackername}
                                </h4>
                                <ul>
                                    <li>Verknüpft am: <Label bsStyle="info">{this.props.adddate}</Label></li>
                                    <li>Zuletzt synchronisert: <Label bsStyle="info">{this.props.lastsyncdate}</Label></li>
                                    <li>Probleme: <Label bsStyle={this.props.errorcolor}>{this.props.errortext}</Label></li>
                                </ul>
                            </Panel.Body>
                            <Panel.Footer>
                                <ButtonToolbar>
                                    {this.props.errorcolor != "danger" &&
                                        <Button onClick={this.click} disabled={this.state.isLoading}>Jetzt synchronisieren</Button>
                                    }
                                        {this.props.errorcolor === "danger" &&
                                        <Button bsStyle="warning">Problem beheben</Button>
                                    }
                                   
                                   
                                    <Button type="button" onClick={() => this.openModal()}>Entfernen</Button>
                                </ButtonToolbar>
                                
                                <Modal visible={this.state.visible} width="400px" height="280px" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <Col xs={12} className="text-center top-abstand">
                                        <h3>Verbindung zum Tracker entfernen?</h3>
                                        <p>Möchtest Du wirklich die Verbindung zwischen {this.props.manufacturer} {this.props.trackername} und WebFit entfernen?</p>
                                        <div className="top-abstand"></div>
                                        <RemoveButton id={this.props.trackerid} /> <Button onClick={() => this.closeModal()}>Nein</Button>
                                    </Col>
                            </Modal>
                               
                            </Panel.Footer>
                        </Panel>
                    </Col>
        )
    }
}

export default TrackerElement;