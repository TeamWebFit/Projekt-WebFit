import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import $ from 'jquery';


const queryString = require('query-string');



class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: false,
      registration: false,
      active: false,
    }
  }

  UNSAFE_componentWillReceiveProps(){
    window.location.reload();
  }

  componentDidMount(){
    
    const parsed = queryString.parse(window.location.search);
    if(parsed.registration === "true"){
      console.log("Registration true");
      this.setState({
        registration: true
      })
    }

    if(parsed.token){
      var token = parsed.token;
      var date = new Date();
      var dateString = date.toString();
      this.props.updateVerifiedUser({
        variables: {
          authToken: token,
          updatedAt: dateString,
          lastLogin: dateString
        }
      });
      this.setState({
        active: true
      })
    }
  
  }

  render() {
    const { email, password, error } = this.state

    let message = '';
    if(this.state.registration === true){
      message = (
        <Alert type="alertblue" title="Bestätige Deine E-Mail-Adresse!" message="Hurra! Du hast Dich bei Webfit erfolgreich registriert. Bitte bestätige nun Deinen Account über den Link in Deinem E-Mail-Postfach."></Alert>
      );
    }
    if(this.state.active === true){
      message = (
        <Alert type="alertblue" title="Geschafft!" message="Du hast Deinen Account erfolgreich aktiviert. Viel Spaß mit Webfit!"></Alert>
      );
    }
    if(this.state.error === true) {
      message = (
        <Alert type="alertred" title="Passwort oder E-Mail-Adresse falsch!" message="Hast Du Deine E-Mail-Adresse bestätigt?"></Alert>
      );
    }
    const alertError = (
      message
    );

    return (
      
      <div className="container text-center">
        <div className="karte2-loggedout">
          <section className="karteLogin">
            <div className="loginPic"></div>
            <div className="login_body">
              <div className="">
                {alertError}
                <h2 className="card-headline">Login</h2>
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
      this.setState({
        error: true
      })
    }
  }//end confirm

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}//end component

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

const updateVerifiedUser = gql`
  mutation UpdateVerifiedUser($authToken: String!, $lastLogin: String, $updatedAt: String){
      verifyUser(authToken: $authToken, lastLogin: $lastLogin, updatedAt: $updatedAt)
      {
        active
        lastLogin
        updatedAt
      }
  }
`

export default compose(
  graphql(updateVerifiedUser, { name: 'updateVerifiedUser' }),
)(Login);
