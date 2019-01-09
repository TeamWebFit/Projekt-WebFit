import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from '../components/Alert'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/constants'
import header from '../assets/img/header.png';
import profilbild from '../assets/img/profilbild.png';
import CheckLogin from '../components/CheckLogin'
import { withCookies, Cookies } from 'react-cookie';
import $ from 'jquery';
import UserProfileHeader from '../components/UserProfileHeader'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ===================
// User Page
// A page for testing all components
// ===================
var back = '';
class UserProfile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName,
            name: props.user.name,
            email: props.user.email,
            gender: props.user.gender,
            dateOfBirth: '',
            height: props.user.height,
            weight: props.user.weight,

        }
        this.onChange = this.onChange.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      if(this.state.gender===0){
        $('#male').attr("checked","checked");
      }
      if(this.state.gender===1){
        $('#female').attr("checked","checked");
        console.log("weiblich");
      }
      if(this.state.gender===2){
        $('#divers').attr("checked","checked");
      }
      var birthString = this.props.user.dateOfBirth;
      var birthSplit = birthString.split(".");
      var birthDayUser = new Date(birthSplit[2], birthSplit[1]-1, birthSplit[0])
      console.log(birthDayUser);
      this.setState({
        dateOfBirth: birthDayUser
      })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChange(date) {
      this.setState({
       dateOfBirth: date
      });
    }

    deleteAccount() {
        console.log("deleteAccount");
    }

    render() {
        console.log(this.state.dateOfBirth);
        console.log(this.props.user.id);
        const authToken = localStorage.getItem(AUTH_TOKEN)

        var man = "männlich";
        var woman = "weiblich";
        var divers = "divers";
        var gen = '';

        console.log(this.state.height);



        return (
          <div>
            <UserProfileHeader user={this.state}/>
              <div className="karte2">
                  <section className="karteUser">
                      <div className="userPic"></div>
                      <div className="login_body">
                          <div className="">
                              <br /><br /><br />
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-user line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label >Vorname</label>
                                    <input className="inp" disabled type="text" name="firstName" onChange={this.onChange} value={this.state.firstName}/>
                                  </div>
                              </div>
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-user line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label >Nachname</label>
                                    <input className="inp" disabled type="text" name="name" onChange={this.onChange} value={this.state.name}/>
                                  </div>
                              </div>
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-envelope line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label>Email</label>
                                    <input id="inp-Email" disabled type="text" name="email"onChange={this.onChange} value={this.state.email}/>
                                  </div>
                              </div>
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-birthday-cake line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label>Geburtstag</label>
                                    <br />
                                    <DatePicker
                                      selected={this.state.dateOfBirth}
                                      onChange={this.handleChange}
                                      dateFormat="dd.MM.YYYY"
                                    />
                                  </div>
                              </div>
                              <div className="line-big">
                                  <div className="line-i">
                                    <i className="fa fa-transgender line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <div>
                                      <label>Geschlecht</label>
                                    </div>
                                    <div>
                                        <input id="female" className="inp form-check-input" disabled type="radio" name="gender" onChange={this.onChange} value={1}/>
                                        <label className="form-check-label"> weiblich </label>
                                    </div>
                                    <div>
                                      <input id="male" className="inp form-check-input" disabled type="radio" name="gender" onChange={this.onChange} value={0}/>
                                      <label className="form-check-label"> männlich </label>
                                    </div>
                                    <div>
                                      <input id="divers" className="inp form-check-input" disabled type="radio" name="gender" onChange={this.onChange} value={2}/>
                                      <label className="form-check-label"> divers </label>
                                    </div>
                                  </div>
                              </div>
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-arrows-v line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label>Größe in cm</label>
                                    <input className="inp" disabled type="text" name="height" onChange={this.onChange} value={this.state.height}/>
                                  </div>
                              </div>
                              <div className="line">
                                  <div className="line-i">
                                    <i className="fa fa-balance-scale line-icon"></i>
                                  </div>
                                  <div className="line-content">
                                    <label>Gewicht in kg</label>
                                    <input className="inp" disabled type="text" name="weight" onChange={this.onChange} value={this.state.weight}/>
                                  </div>
                              </div>
                              <br />
                          </div>
                          <br /><br />
                      </div>
                  </section>
              </div>
              <div id="div-btn-delete">
                <button id="btn-acc-delete" className="btn btn-ghost col-12 text-center" onClick={this.deleteAccount}>Account löschen</button>
              </div>
        </div>
        )//end return

    }

} //End User Component

export default UserProfile;
