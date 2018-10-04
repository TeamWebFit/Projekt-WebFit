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
      //tag: '',
      //monat: '',
      //jahr: '',
      gender: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log("OnSubmit funktioniert");
    var gen = parseInt(this.state.gender);
    this.props.newUserMutation({
      variables: {
        firstName: this.state.firstName,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        gender: gen
      }
    })
    console.log("Submit fertiiiig");
    this.props.history.push("/?registration=true");
  }

  render(){
    console.log(this.props);
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
                  <input type="text" className="form-control" id="InputName" placeholder="vorname" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="InputNachname" placeholder="nachname" name="name" onChange={this.onChange} value={this.state.name} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="InputEmail" placeholder="email" name="email" onChange={this.onChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="InputPassword" placeholder="passwort" name="password" onChange={this.onChange} value={this.state.password} />
                </div>
                {/*}<div>
                  <label>geburtstag</label>
                  <br />
                  <select className="custom-select my-1 mr-sm-2 col-md-3" name="tag" onChange={this.onChange} value={1}>
                    <option>01</option>
                  </select>
                  <select className="custom-select my-1 mr-sm-2 col-md-3" name="monat" onChange={this.onChange} value={2}>
                    <option>januar</option>
                  </select>
                  <select className="custom-select my-1 mr-sm-2 col-md-4" name="jahr" onChange={this.onChange} value={3}>
                    <option>1990</option>
                  </select>
                </div>*/}
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

  _createUser = async () => {
    console.log("Start Datenübertragung");
    const { firstName, name, email, password, gender } = this.state
    await this.props.newUserMutation({
      variables: {
        firstName,
        name,
        email,
        password,
        gender
      }
    })
    console.log("Daten übertragen");
  }

}//End Register Component



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
  mutation NewUserMutation($firstName: String!, $name: String!, $email: String!, $password: String!, $gender: Int)
  {  createUser (
      firstName: $firstName,
      name: $name,
      gender: $gender,
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
    }
  }
`
//export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery'})(Register)
export default graphql(newUserMutation, { name: 'newUserMutation'})(Register)

{/*mutation NewUserMutation($firstName: String!, $name: String!, $email: String, $password: String)
 {  createUser (
    firstName: $firstName,
    name: $name,
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
    }
  }*/}

  {/*mutation NewUserMutation ($name: String!, $email: String!, $password: String!)
  {  createTestUser ( name: $name, email: $email, password: $password)
    {
      id
      name
      email
      password }
  }*/}
