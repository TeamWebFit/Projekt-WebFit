import React, { Component } from 'react';
import {} from 'react-bootstrap';
import Alert from '../components/Alert'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/constants'
import header_profil from '../assets/img/header_profil.png';


// ===================
// User Page
// A page for testing all components
// ===================

/*const GET_USERS = gql`
          {
          allUsers{
          id
          firstName
        }
      }
    `;*/

class User extends Component{

  /*displayUser(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading User...</div>)
    }else{
      return data.allUsers.map(user => {
        return(
          <li key={user.id}>{user.firstName}</li>
        );
      })
    }
  }*/

    render(){

      console.log(this.props);
      const authToken = localStorage.getItem(AUTH_TOKEN)

        return (
            <div>
              <section className="userHeader">
              <img src={header_profil} width="100%"/>
                <p></p>
              </section>
              <div className="container">
              <div className="form-row" style={{display : 'inline-block'}} >

                  <div className="userName" style={{display : 'inline-block'}}>
                <label style={{display : 'inline-block'}}>Name</label>
                  <p className="userInfo">Name</p>
                </div>

                  <div className="userName" style={{display : 'inline-block'}}>
                <label style={{display : 'inline-block'}}>Nachname</label>
                  <p className="userInfo">Nachname</p>
                <br />
                </div>
                </div>
                <div className="form-row">
                    <div className="kachel kachel1">
                    <div className="kachel_header">Gewicht</div>
                        <h5 className="">60kg</h5>
                      </div>
                      <div className="kachel kachel2" >
                      <div className="kachel_header">Größe</div>
                          <h5 className="">175cm</h5>
                        </div>
                        <div className="kachel kachel3" >
                        <div className="kachel_header">Geschlecht</div>
                            <h5 className="">weiblich</h5>
                          </div>
                        </div>
                  <div>
                      <label>Geburtstag</label>
                        <p className="userInfo">Geburtstag</p>
                  </div>
                    <br />
                  <div className="form-row">
                    <div className="form-group">
                    <label>Email</label>
                      <p className="userInfo">Email</p>
                    </div>
                  </div>
                    <br />
                  <div className="form-row">
                    <div className="form-group" style={{display : 'inline-block'}}>
                      <label style={{display : 'inline-block'}}>Land</label>
                        <p className="userInfo">Land</p>
                    </div>
                      <br />
                    <div className="form-group" style={{display : 'inline-block'}}>
                      <label style={{display : 'inline-block'}}>PLZ</label>
                        <p className="userInfo">PLZ</p>
                    </div>
                  </div>
                  <br /><br />


  <br /><br />
            </div>
            </div>
        )
    }
}

export default User;
