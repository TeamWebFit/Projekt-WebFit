//react basis
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import '../App.css';
//Router
import { withRouter, Link } from 'react-router-dom';
//Apollo

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      name: '',
      email: '',
      password: '',
      tag: '',
      monat: '',
      jahr: '',
      gender: '',
      dateOfBirth: '',
      registrationStatus: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  update(state) {
        this.setState(state);

        const { date, month, year } = { ...this.state, ...state };
        const { onChange, value } = this.props.input;

        if(date && month && year) {
            onChange(new Date(year, month - 1, date));
        } else if(value) {
            onChange(null);
        }
    }

  onSubmit(e){
    e.preventDefault();

    var tag = this.state.tag;
    var monat = this.state.monat;
    var jahr = this.state.jahr;
    var gebDat = new Date(jahr, monat-1, tag);

    var gen = parseInt(this.state.gender);

    this.props.newUserMutation({
      variables: {
        firstName: this.state.firstName,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        gender: gen,
        dateOfBirth: gebDat,
        registrationStatus: true
      }
    })
    console.log("Submit fertiiiig");

    this.props.history.push("/login");

  }

  render(){
    const { date, month, year } = this.state;
    const thisYear = new Date().getFullYear();

    {/*const userToRender = this.props.allUsersQuery.allTestUsers
    console.log(userToRender);*/}

    return(
      <div>
        <div className="card" >
          <div className="card-body">
            <h3>Jetzt bei WebFit registrieren!</h3>
            <br />
            <form onSubmit={this.onSubmit}> {/*onSubmit={this.onSubmit}*/}
                <div className="form-group">
                  <input type="text" className="form-control" id="InputName" placeholder="Vorname" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="InputNachname" placeholder="Nachname" name="name" onChange={this.onChange} value={this.state.name} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="InputEmail" placeholder="E-Mail" name="email" onChange={this.onChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="InputPassword" placeholder="Passwort" name="password" onChange={this.onChange} value={this.state.password} />
                </div>
                <div>
                  <label>Geburtstag</label>
                </div>
                <select className="selectBoxDate" onChange={this.onChange} value={date} name="tag">
                  <option>Tag</option>
                  {getOptions(1, 31)}
                </select>
                <select className="selectBoxDate" onChange={this.onChange} value={month} name="monat">
                  <option>Monat</option>
                  {getOptions(1, 12)}
                </select>
                <select className="selectBoxDate" onChange={this.onChange} value={year} name="jahr">
                  <option>Jahr</option>
                  {getOptions(thisYear - 60, thisYear-12)}
                </select>
                <br />
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={1} />
                  <label className="form-check-label"> weiblich </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={0} />
                  <label className="form-check-label"> männlich </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={2} />
                  <label className="form-check-label"> divers </label>
                </div>
                <br /><br />
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="Check1" required={true} />
                  <label className="form-check-label">AGBs</label>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="Check2" required={true} />
                  <label className="form-check-label">Datenschutzbedingungen</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> {/*onClick={() => this._createUser()}*/}
            </form>
          </div>
        </div>
      </div>

    )//end return



  }//End Render

}//End Register Component

function getOptions(start, end) {
    const options = [];

    for(let i = start; i <= end; i++) {
        options.push(<option key={i}>{i}</option>)
    }

    return options;
}


const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allTestUsers {
      id
      name
      email
      password
    }
  }
`

const newUserMutation = gql`
  mutation NewUserMutation($firstName: String!, $name: String!, $email: String!, $password: String!, $gender: Int, $dateOfBirth: DateTime)
  {  createUser (
      firstName: $firstName,
      name: $name,
      gender: $gender,
      dateOfBirth: $dateOfBirth,
      authProvider: {
          email: {
            email: $email,
            password: $password
          }
      }
    )
    {
      createdAt
      id
      firstName
      name
      email
      password
      gender
      dateOfBirth
    }
  }
`
//export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery'})(Register)
export default graphql(newUserMutation, { name: 'newUserMutation'})(Register)
