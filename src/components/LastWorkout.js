import React, { Component } from 'react';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { } from 'react-bootstrap';


class LastWorkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container chartbox">
        <h6 className="headlinecharts">Letztes Workout</h6>
        <div>Workout vom 00.00.0000 - Joggen</div>

        <div className="wobox">
          <div className="wobox1">
            <i className="fa fa-heartbeat"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">Schritte</p>
          </div>

          <div className="wobox2">
            <i className="fa fa-fire"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">km</p>
          </div>

          <div className="wobox3">
            <i className="fa fa-fire"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">Kcal</p>
          </div>
        </div>

        <div className="wobox">
          <div className="wobox4">
            <i className="fa fa-fire"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">min</p>
          </div>

          <div className="wobox5">
            <i className="fa fa-heartbeat"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">Ø bpm</p>
          </div>

          <div className="wobox6">
            <i className="fa fa-fire"></i>
            <p className="woboxp">333</p>
            <p className="woboxp">Etagen</p>
          </div>
        </div>

      </div>
    )
  }
}

export default LastWorkout