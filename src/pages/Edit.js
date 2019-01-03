import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from '../components/Alert'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql, compose } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/constants'
import header_profil from '../assets/img/header_profil.png';
import CheckLogin from '../components/CheckLogin'
import { withCookies, Cookies } from 'react-cookie';
import ImageUpload from '../components/ImageUpload'


// ===================
// User Page
// A page for testing all components
// ===================



class EditUser extends Component {


  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      name: '',
      email: '',
      password: '',
      tag: '',
      monat: '',
      jahr: '',
      gender: '',
      dateOfBirth: '',
      height: '',
      country: '',
      zipcode: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange() {
    window.location = "/user";
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault
    console.log("Submit start");

    const cookies = new Cookies();
    var userid = cookies.get('webfit_user');

    this.props.editUserMutation({
      variables: {
        id: userid,
        firstName: this.state.firstName,
        name: this.state.name,
        email: this.state.email,
        //gender: gen,
        //dateOfBirth: birthDayString,
        height: this.state.height,
        country: this.state.country,
        zipcode: this.state.zipcode,
      }
    });

    console.log("Submit eingetragen > email");

  }


  render() {

    console.log(this.props);

    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser)

    return (
      <div>
        <CheckLogin />
        <Query
          query={getUser}
          variables={{ cookieuser }}
        >
          {({ loading, error, data }) => {

            if (loading) return (
              <div>Loading User...</div>
            );
            if (error) return `Error! ${error.message}`;

            if (data['user'] === null) {
              return (
                <div>

                </div>
              )
            } else {
              if (data['user'].id === cookieuser) {
                return (
                  <div className="">
                    <form onSubmit={this.onSubmit}>
                      <div className="karte2">
                        <section className="karteUser">
                          <div className="userPic"></div>
                          <div className="edit_body">
                            <br /><br />
                            <h4>Bearbeite Dein Profil:</h4>
                            {/*<ImageUpload />*/}
                            <br />
                            <div className="userName">
                              <label >Name</label>
                              <input type="text" className="" id="InputNachname" name="firstName" placeholder={this.state.firstName} onChange={this.onChange} value={this.state.firstName} />
                            </div>
                            <br />
                            <div className="userName">
                              <label>Nachname</label>
                              <input type="text" className="" id="InputNachname" name="name" onChange={this.onChange} value={this.state.name} />

                              <br />
                            </div>
                            <div>
                              <div className="kachel_header">Gewicht</div>
                              <input type="text" className="" id="InputNachname" placeholder="-" name="weight" onChange={this.onChange} />
                            </div>
                            <div>
                              <div className="kachel_header">Größe</div>
                              <input type="text" className="f" id="InputNachname" placeholder="-" name="height" onChange={this.onChange} />
                            </div>
                            <br />
                            <div>
                              <label>Geburtstag</label>
                              <input type="text" className="" id="InputNachname" name="dateOfBirth" onChange={this.onChange} />
                            </div>
                            <br />
                            <label>Land</label>
                            <input type="text" className="" id="InputNachname" name="country" onChange={this.onChange} placeholder={this.state.country} />
                            <br /><br />
                            <label>PLZ</label>
                            <input type="text" className="" id="InputNachname" name="zipcode" onChange={this.onChange} />
                            <div className="form-group">


                            </div>
                            <br />
                            <br />

                            <button className="btn btn-basic" type="submit">Speichern</button>
                            <br /><br />


                            <br /><br />
                          </div>

                        </section>
                      </div>
                    </form>
                  </div>
                )
              } else {
                return (
                  <div> </div>
                )
              }
            }

          }}
        </Query>

      </div>
    )
  }

 
}// End Edit Component


const getUser = gql`
      query cookieuser($cookieuser: ID)
      {
        user(id: $cookieuser)
        {
          id,
          name,
          firstName,
          email,
          dateOfBirth,
          gender,
          country
        }
      }`

const editUserMutation = gql`
  mutation EditUserMutation($id: ID, $firstName: String, $name: String, $email: String, $gender: Int, $dateOfBirth: String, $height: String, $country: String, $zipcode: String)
  {  editUser (
      id: $id,
      firstName: $firstName,
      name: $name,
      gender: $gender,
      email: $email,
      dateOfBirth: $dateOfBirth,
      height: $height,
      country: $country,
      zipcode: $zipcode,
    )
    {
      id,
      name,
      firstName,
      gender,
      dateOfBirth,
      height,
      email,
      country,
      zipcode,
    }
  }`


/*export default compose(
  graphql(editUserMutation, { name: 'editUserMutation' }),
  withRouter
)(EditUser);*/

export default EditUser;

