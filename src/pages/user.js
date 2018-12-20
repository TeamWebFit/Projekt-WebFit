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


// ===================
// User Page
// A page for testing all components
// ===================




class User extends Component {


  constuctor() {
    this.handlePageChange = this.handlePageChange.bind(this);

  }

  handlePageChange() {
    window.location = "/edit";
  }

  render() {


    console.log(this.props);
    const authToken = localStorage.getItem(AUTH_TOKEN)


    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser)



    return (
      <div>

        <CheckLogin />
        <Query query={getUser} variables={{ cookieuser }}>
          {({ loading, error, data }) => {
            if (loading) return (
              <div>Loading User...</div>
            );
            if (error) return `Error! ${error.message}`;

            if (data['user'] === null) {
              return (

                <div>
                  <div className="karte2">
                    <section className="karte">
                      <div class="userPic"></div>
                      <div class="login_body"></div>

                    </section>
                  </div>
                </div>
              )
            } else {
              if (data['user'].id === cookieuser) {
                return (
                  <div>
                    <div className="karte2">
                      <section className="karteUser">
                        <div class="userPic"></div>
                        <div class="login_body">
                          {/*<section className="userHeader">
                            <img className="headerImage" src={header} width="100%" />
                            <img className="profileImage" src={profilbild} width="20%" />
                            <p></p>
                            </section>*/}
                          <div className="">
                            <br /><br /><br />
                            <div className="userName">
                              <label >Name</label>
                              <p className="userInfo">{data.user.firstName}</p>
                            </div>

                            <div className="userName" >
                              <label >Nachname</label>
                              <p className="userInfo">{data.user.name}</p>
                              <br />
                            </div>

                            <div className="kachel1">
                              <div className="kachel_header">Gewicht</div>
                              <h5 className="">-</h5>
                            </div>
                            <div className="kachel2" >
                              <div className="kachel_header">Größe</div>
                              <h5 className="">-</h5>
                            </div>
                            <div className="kachel3" >
                              <div className="kachel_header">Geschlecht</div>
                              <h5 className="">{data.user.gender}</h5>
                            </div>
                            <br /><br />
                            <div>
                              <label>Geburtstag</label>
                              <p className="userInfo">{data.user.dateOfBirth}</p>
                            </div>
                            <br />
                            <div className="form-row">
                              <div className="form-group">
                                <label>Email</label>
                                <p className="userInfo">{data.user.email}</p>
                              </div>
                            </div>
                            <br />
                            <div className="form-row">
                              <div className="form-group" style={{ display: 'inline-block' }}>
                                <label style={{ display: 'inline-block' }}>Land</label>
                                <p className="userInfo">Land</p>
                              </div>
                              <br />
                              <div className="form-group" style={{ display: 'inline-block' }}>
                                <label style={{ display: 'inline-block' }}>PLZ</label>
                                <p className="userInfo">{data.user.zipcode}</p>
                              </div>
                              <div className="form-group" style={{ display: 'inline-block' }}>
                              </div>
                              <br /><br />
                              <button className="btn btn-basic" onClick={this.handlePageChange}>Bearbeiten</button>
                            </div>
                            <br /><br />
                          </div>
                          <br /><br />
                        </div>
                      </section>
                    </div>
                  </div>
                )
              } else {
                return (

                  <div>
                    <div className="karte2">
                      <section className="karte">
                        <div class="userPic"></div>
                        <div class="login_body"></div>
                      </section>
                    </div>
                  </div>
                )
              }
            }

          }}
        </Query>

      </div>
    )
  }
} //End User Component

const getUser = gql`
        query cookieuser($cookieuser: ID){
          user(id: $cookieuser){
            id,
            name,
            firstName,
            email,
            dateOfBirth,
            gender,

          }
        }
        `;


export default User;
