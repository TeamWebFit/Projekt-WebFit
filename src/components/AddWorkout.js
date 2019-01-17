import React, { Component } from 'react';
import Chart1 from 'react-chartist';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';


class AddWorkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      time: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    var d = new Date();
    var dT = d.getFullYear() + "-" + (d.getMonth() +1) + "-" + d.getDate();
    this.setState({
      date: dT
    })
    console.log(dT);
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state.date);
    const cookies = new Cookies();
    var userId = cookies.get('webfit_user');
    console.log(userId);

    const { date, title, time } = this.state;

    return(
      <div>
          <div>
              <h3>Workout hinzufügen</h3>
              <div className="line">
                  <div className="line-i">
                      <i className="fa fa-bicycle line-icon"></i>
                  </div>
                  <div className="line-content">
                      <label>Titel</label>
                      <input className="inp" type="text" placeholder="z.B. Home-Workout" name="title" onChange={this.onChange} value={this.state.title}/>
                  </div>
              </div>
              <div className="line">
                  <div className="line-i">
                      <i className="fa fa-calendar line-icon"></i>
                  </div>
                  <div className="line-content">
                      <label>Datum</label>
                      <input type="date" name="date" onChange={event => this.setState({date: event.target.value})} value={this.state.date} />
                  </div>
              </div>
              <div className="line">
                  <div className="line-i">
                      <i className="fa fa-history line-icon"></i>
                  </div>
                  <div className="line-content">
                      <label>Dauer in min</label>
                      <input className="inp" type="number" placeholder="z.B. 60" step="0.5" min="1" name="time" onChange={this.onChange} value={this.state.time}/>
                  </div>
              </div>
              <Mutation
                mutation={CREATE_WORKOUT}
                variables={{ userId, date, title, time }}
                onCompleted={data => this._confirm(data)}
              >
                {mutation => (
                  <button className="btn-basic" onClick={mutation}>Speichern</button>
                )}
              </Mutation>
            </div>
        </div>
      )
  }//end render
  _confirm = async data => {
    window.location.reload();
  }
}//end component


const CREATE_WORKOUT = gql`
        mutation CreateWorkout($userId: ID, $time: String, $title: String, $date: String){
          createWorkout(userId: $userId, time: $time, title: $title, date: $date){
            userId
          }
        }
        `

export default AddWorkout;
