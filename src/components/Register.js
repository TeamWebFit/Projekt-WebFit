//react basis
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
//Router
import { withRouter, Link } from 'react-router-dom';
//Component

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      gender: '',
      name: '',
      nachname:  '',
      email: '',
      passwort: '',
      tag: '',
      monat: '',
      jahr: '',
      gender: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const user = {
      name: this.state.name,
      nachname: this.state.nachname,
      email: this.state.email,
      passwort: this.state.passwort,
      tag: this.state.tag,
      monat: this.state.monat,
      jahr: this.state.jahr,
      gender: this.state.gender
    };

    this.props.createUser(user);
    //this.props.history.push("/home");
  }

  render(){
    return(
      <div>
        <div className="card" >
          <div className="card-body">
            <h3>Jetzt bei WebFit registrieren!</h3>
            <br />
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" id="InputName" placeholder="name" name="name" onChange={this.onChange} value={this.state.name} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="InputNachname" placeholder="nachname" name="nachname" onChange={this.onChange} value={this.state.nachname} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="InputEmail" placeholder="email" name="email" onChange={this.onChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="InputPassword" placeholder="passwort" name="passwort" onChange={this.onChange} value={this.state.passwort} />
                </div>
                <div>
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
                </div>
                <br />
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="Radio1" onChange={this.onChange} value={"1"} />
                  <label className="form-check-label"> weiblich </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="Radio2" onChange={this.onChange} value={"0"} />
                  <label className="form-check-label"> männlich </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="Radio3" onChange={this.onChange} value={"2"} />
                  <label className="form-check-label"> divers </label>
                </div>
                <br /><br />
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="Check1" required={true} onChange={this.onChange} />
                  <label className="form-check-label">AGBs</label>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="Check2" required={true} onChange={this.onChange} />
                  <label className="form-check-label">Datenschutzbedingungen</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

//Register.propTypes = {
  //createUser: PropTypes.func.isRequired
//};

export default Register
