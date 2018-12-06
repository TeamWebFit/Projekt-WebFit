import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';




const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(email: $email, password: $password)
    {
      id
      name
      firstName
      password
      authToken
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
  };

}


  render() {
    const { email, password, error } = this.state;

    //funktion die überprüft ist in dem Cookie eine id gespeichert?
    //Wenn ja überprüfe ob id in Datenbank vorhanden;
    //Wenn beides nicht dann weiter zu login;

    //Id muss bei singIn rauskommen
    //jede komponente muss überprüfen ob der user eingeloggt ist
    //nach jedem Pagereload muss überprüft werden ob der Cookie noch vorhanden ist

    //Funktion die beim Seitenreload in console log den aktuellen cookie ausgibt
    //Cookie wird eingetragen, Cookie wird ausgegeben (Consolge log, Alert)
    //-> man kann auf den cookie zugreifen
    //nimm den wert des cookies -> Query gibts den User ist der aktiv, und gerade eingeloggt wenn nicht leite zu login

    const cookies = new Cookies();

    var id = "5bff235bcb414d0f704f70eb";

    if (id == "5bff235bcb414d0f704f70eb") {
        console.log(cookies.get('User'));
    } else {
        console.log('Cookie Error!');
    }

    return (


      <div className="container">

        <div id="login-error">{this.state.error}
        </div>
        <h4 className="mv3">Login</h4>
        <div className="flex flex-column">
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
        <br />
        <div className="flex mt3">
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
            <br />
            <br />
            <Link to={"/register"}>Noch kein WebFit Mitglied? Gleich hier Registrieren! </Link>
            </div>


      </div>
    )
  }

  _confirm = async data => {

    const { token } = data.signinUser
    this._saveUserData(token)
console.log("ich bin jetzt eingeloggts")
    const cookies = new Cookies();

    this.props.history.push(`/user`)

    var id = "5bff235bcb414d0f704f70eb"
    cookies.set('User', id,  {path: '/'});
    //console.log(cookies.get('User')); // Pacman
    console.log("push to User");


  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)

  }
}

export default Login;
