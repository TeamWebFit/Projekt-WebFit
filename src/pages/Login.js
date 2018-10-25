import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants/constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(
        email: {
            email: $email,
            password: $password
        })
    {
      token
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
