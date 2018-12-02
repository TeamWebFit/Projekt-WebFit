import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Button, ButtonToolbar, Label, Alert} from 'react-bootstrap';
import axios from 'axios';

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
               error: undefined
         };
         this.click = this.click.bind(this);
  }

click() {

    // Basics
    this.setState({ isLoading: true });
    let url = "http://projekt-webfit.de:4009/sync?user=" + this.props.user + "&trackerid=" + this.props.trackerid
    console.log(url)
    
    // HTTP API Request
    axios.get(url, {})
      .then((response) => {
            this.setState({ data: response.data, isLoading: false });
            if (this.state.data.includes("Error") == true){
                this.setState({error: true})
            }
       })
      .catch((err) => {
            this.setState({ data: err, isLoading: false });
       });
}

    render(){

        // Error Darstellung
        let MessageBox
        if(this.state.error === true){
            MessageBox = <Alert bsStyle="danger">
                            <strong>Ein Fehler ist aufgetreten :(</strong><br /> {this.state.data}
                        </Alert>
        }else if(this.state.error === false){
            MessageBox = <Alert bsStyle="success">
                            Tracker erfolgreich synchronisiet
                        </Alert>
        }
        // Rendering 
        return (
                    <Col xs={12} md={4}>
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
                                    <Button bsStyle="danger">Entfernen</Button>
                                </ButtonToolbar>
                                
                            
                               
                            </Panel.Footer>
                        </Panel>
                    </Col>
        )
    }
}

export default TrackerElement;