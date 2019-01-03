import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import $ from 'jquery';

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

let MessageBox;


class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  render() {
    const { email, password, error } = this.state


    return (
      <div className="container text-center">
        <div className="karte2">
          <section className="karteLogin">
            <div className="loginPic"></div>
            <div className="login_body">
              <div className="">
                <div id="login-error">
                  {this.state.error}
                </div>
                {MessageBox}
                <h2>Login</h2>
                <p>Willkommen bei WebFit! <br /> Bitte logge Dich ein um Deine Daten zu sehen.</p>
                <br />

                <div className="">
                  <input className=""
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    type="text"
                    placeholder="Email"
                  />
                  <input className=""
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <br /><br />
                <div className="col-md-12">
                  <br /><br />
                  <Mutation
                    mutation={LOGIN_MUTATION}
                    variables={{ email, password }}
                    onCompleted={data => this._confirm(data)}
                    onError={error_handler => (
                      <Alert type="alertred" title="Huch.....!" message="Scheinbar gibt es ein Verbindungsproblem, bitte versuche es zu einem späteren Zeitpunkt nochmal."></Alert>
                      )}
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
                  <br />
                  <Link to={"/register"}>Noch kein WebFit-Mitglied? Jetzt Registrieren!</Link>

                  <br /><br /><br />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    if(data.signinUser){
      const { token } = data.signinUser
      this._saveUserData(token)
      console.log("Ich bin eingeloggt")
      console.log(data['signinUser'].id)
      var UserID = data['signinUser'].id
      const cookies = new Cookies();
      cookies.set('webfit_user', UserID, {
        path: '/'
      })
      this.props.history.push(`/home`);
    }else{
      console.log("PW falsch");
      MessageBox = <Alert bsStyle="danger">
                      <strong>Ein Fehler ist aufgetreten :(</strong><br />
                  </Alert>
  }

  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
