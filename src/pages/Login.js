import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(email: $email, password: $password)
    {
      id
      name
      firstName
      password
    }
  }
`


class Login extends Component {

constructor(){
    super()
    this.state ={
    email: '',
    password: '',
    error: '',

    }
}

  render() {
    const { email, password, error } = this.state
    return (
      <div className="container text-center">
        <div id="login-error">
          {this.state.error}
        </div>
        <h2>Login</h2>
        <p>Willkommen bei Webfit! Bitte logge Dich mit Deinen bekannten Zugangsdaten ein.</p>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <input className="form-control"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input className="form-control"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="your password"
          />
        </div>
        <div className="col-md-4"></div>
        <br /><br />
        <div className="col-md-12">
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, password }}
                onCompleted={data => this._confirm(data)}
                onError={error_handler => this.setState({error: <Alert type="alertred" title="Huch.....!" message="Scheinbar ist das eingegebene Passwort falsch oder unter der angegebenen EMail-Adresse kann kein Nutzer gefunden werden :("></Alert>})}
            >
                {mutation => (
                <div className="btn btn-basic" onClick={mutation}>
                    login
                </div>
                )}
            </Mutation>
            <br />
            <br />
            <Link to={"/resetPassword"}>Passwort vergessen?</Link>
            </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = data.signinUser
    this._saveUserData(token)
    console.log("Ich bin eingeloggt")
    console.log(data['signinUser'].id)
    var UserID = data['signinUser'].id
    const cookies = new Cookies();
    cookies.set('webfit_user', UserID, {
      path: '/'
      })
    
     this.props.history.push(`/`);
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
