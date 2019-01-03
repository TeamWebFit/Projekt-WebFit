//react basis
import React, { Component } from 'react';
import '../App.css';
//axios
import axios from 'axios';
//Router
import { withRouter, Link } from 'react-router-dom';
//Apollo
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {

  constructor(props) {
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
      authToken: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  update(state) {
    this.setState(state);

    const { date, month, year } = { ...this.state, ...state };
    const { onChange, value } = this.props.input;

    if (date && month && year) {
      onChange(new Date(year, month - 1, date));
    } else if (value) {
      onChange(null);
    }
  }

  onSubmit(e) {
    e.preventDefault
    console.log("Submit start");

    var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    var tag = this.state.tag;
    var monat = this.state.monat;
    var jahr = this.state.jahr;
    var gebDat = tag + "." + monat + "." + jahr;
    var birthDay = new Date(jahr, monat - 1, tag);
    var birthDayString = birthDay.toString();

    var gen = parseInt(this.state.gender);

    const { firstName, email, authToken } = this.state;

    this.props.newUserMutation({
      variables: {
        firstName: this.state.firstName,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        gender: gen,
        dateOfBirth: birthDayString,
        //registrationStatus: true,
        authToken: token
      }
    }).then(() => {
      return axios.post('/api/form', {
        firstName,
        email,
        authToken: token
      });
    });

    this.props.history.push(`/login`);

    console.log("Submit eingetragen + email");

    //const form = await axios.post('/api/form', {
      //firstName,
      //email,
      //authToken: token
    //}, console.log("axios"));
    //entweder mit .then oder

  }

  render() {
    var heute = new Date();
    console.log(heute);
    const { date, month, year } = this.state;
    const thisYear = new Date().getFullYear();


    {/*const userToRender = this.props.allUsersQuery.allTestUsers
    console.log(userToRender);*/}

    return (
      <div className="register-main">
      <div className="karte2">
        <section className="karteRegister">
          <div className="registerPic"></div>
          <div className="register_body">
            <h3>Jetzt bei WebFit registrieren!</h3>
            <form onSubmit={this.onSubmit}>

                  <input type="text" placeholder="Vorname" name="firstName" onChange={this.onChange} value={this.state.firstName} />


                  <input type="text" placeholder="Nachname" name="name" onChange={this.onChange} value={this.state.name} />


              <input type="email" placeholder="E-Mail" name="email" onChange={this.onChange} value={this.state.email} />
              <input type="password" placeholder="Passwort" name="password" onChange={this.onChange} value={this.state.password} />
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
                {getOptions(thisYear - 60, thisYear - 12)}
              </select>
              <div>
                <label>Geschlecht</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={1} />
                <label className="form-check-label"> weiblich </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={0} />
                <label className="form-check-label">männlich </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={2} />
                <label className="form-check-label"> divers </label>
              </div>
              <br /><br />
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="Check1" required={true} />
                <label className="form-check-label">AGB</label>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="Check2" required={true} />
                <label className="form-check-label">Datenschutzbedingungen</label>
              </div>
              <button type="submit" className="btn btn-basic">Registrieren</button>
              <br /><br /><br />
            </form>
          </div>

          {/*<h3>Jetzt bei WebFit registrieren!</h3>
        <br />
        <form onSubmit={this.onSubmit}>
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
            {getOptions(thisYear - 60, thisYear - 12)}
          </select>
          <br />
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={1} />
            <label className="form-check-label"> weiblich </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={0} />
            <label className="form-check-label">     männlich </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" onChange={this.onChange} value={2} />
            <label className="form-check-label"> divers </label>
          </div>
          <br /><br />
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="Check1" required={true} />
            <label className="form-check-label">AGB</label>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="Check2" required={true} />
            <label className="form-check-label">Datenschutzbedingungen</label>
          </div>
          <button type="submit" className="btn btn-basic">Registrieren</button>
        </form>*/}
        </section>
      </div>
      </div>



    )//end return



  }//End Render

}//End Register Component

function getOptions(start, end) {
  const options = [];

  for (let i = start; i <= end; i++) {
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
  mutation NewUserMutation($firstName: String!, $name: String!, $email: String!, $password: String!, $gender: Int, $authToken: String!, $dateOfBirth: String)
  {  createUser (
      firstName: $firstName,
      name: $name,
      gender: $gender,
      authToken: $authToken,
      email: $email,
      password: $password,
      dateOfBirth: $dateOfBirth
    )
    {
      id
      firstName
      name
      email
      password
      gender
      authToken
      dateOfBirth
    }
  }
`
//export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery'})(Register)

export default compose(
  graphql(newUserMutation, { name: 'newUserMutation' }),
  withRouter
)(Register);
