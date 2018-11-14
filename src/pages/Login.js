import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(
            email: $email,
            password: $password
        )
    {
      firstName
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
    /*var createHash = require("create-hash");
    var hash = createHash("sha224");
    var hashPassword = hash.update(this.state.password).digest("hex");*/
    return (
      <div className="container">
        <div id="login-error">{this.state.error}
        </div>
        <h2 className="mv3">Welcome back!</h2>
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
            placeholder="Your password"
          />
        </div>
        <br />
        <br />
        <div className="flex mt3">
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={{ email, /*hashPassword*/ password }}
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
            <div>
              <Link to="/resetPassword">Passwort vergessen?</Link>
              <br />
              <Link to="/newPassword">Hoppala..! Passwort zurücksetzen!</Link>
            </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = data.signinUser
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
