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

// ===================
// User Page
// A page for testing all components
// ===================

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.firstName,
            name: props.user.name,
            email: props.user.email,
            gender: props.user.gender,
            dateOfBirth: props.user.dateOfBirth,
            height: props.user.height,
            weight: props.user.weight,
            enabled: false
        }
        this.onChange = this.onChange.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
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
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    deleteAccount() {
        console.log("deleteAccount");
    }

    render() {

        console.log(this.props.user.id);
        const authToken = localStorage.getItem(AUTH_TOKEN)

        var man = "männlich";
        var woman = "weiblich";
        var divers = "divers";
        var gen = '';

        console.log(this.state.gender);



        return (
          <div>
            <UserProfileHeader user={this.state}/>
              <div className="karte2">
                  <section className="karteUser">
                      <div className="userPic"></div>
                      <div className="login_body">
                          <div className="">
                              <br /><br /><br />
                              <div className="userName">
                                  <i className="fa fa-user"></i>
                                  <label >Vorname</label>
                                  <input className="inp" disabled type="text" name="firstName" onChange={this.onChange} value={this.state.firstName}/>
                              </div>

                              <div className="userName" >
                                  <i className="fa fa-user"></i>
                                  <label >Nachname</label>
                                  <input className="inp" disabled type="text" name="name" onChange={this.onChange} value={this.state.name}/>
                                  <br />
                              </div>
                              <div>
                                  <i className="fa fa-envelope"></i>
                                  <label>Email</label>
                                  <input disabled type="text" name="email"onChange={this.onChange} value={this.state.email}/>
                              </div>
                              <div>
                                  <i className="fa fa-birthday-cake"></i>
                                  <label>Geburtstag</label>
                                  <input className="inp" disabled type="text" name="dateOfBirth" onChange={this.onChange} value={this.state.dateOfBirth}/>
                              </div>
                              <br />
                              <div>
                                <i className="fa fa-transgender"></i>
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
                              <br />
                              <div>
                                  <i className="fa fa-arrows-v"></i>
                                  <label>Größe</label>
                                  <input className="inp" disabled type="text" name="height" onChange={this.onChange} value={this.state.height}/>
                              </div>
                              <br />
                              <div>
                                  <i className="fa fa-balance-scale"></i>
                                  <label>Gewicht</label>
                                  <input className="inp" disabled type="text" name="weight" onChange={this.onChange} value={this.state.weight}/>
                              </div>
                              <br />
                              <button className="btn btn-basic" onClick={this.deleteAccount}>Account löschen</button>
                          </div>
                          <br /><br />
                      </div>
                  </section>
              </div>
          </div>
        )//end return

    }

} //End User Component

export default UserProfile;
