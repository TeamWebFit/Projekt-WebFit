import React, { Component } from 'react';
import {} from 'react-bootstrap';
import $ from 'jquery';

// ===================
// SetDatenschutz Component
// Entsprechende Datenschutzeinstellungen am Nutzer setzen
// ===================

class SetDatenschutz extends Component{
    componentDidMount() {
        var steps = this.props.steps
        var weight = this.props.weight
        var heart = this.props.heart

        if (steps === 0){
            console.log("Steps werden gelöscht")
        }

        if (weight === 0){
            console.log("Gewicht wird gelöscht")
        }

        if (heart === 0){
            console.log("Puls wird gelöscht")
        }
    }
    render(){
        return (
            <div>
               
            </div>
        )
    }
}

export default SetDatenschutz;