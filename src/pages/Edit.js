import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from '../components/Alert'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/constants'
import header_profil from '../assets/img/header_profil.png';
import CheckLogin from '../components/CheckLogin'
import { withCookies, Cookies } from 'react-cookie';
import ImageUpload from '../components/ImageUpload'
//axios
import axios from 'axios';



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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  update(state) {
    this.setState(state);

    const { date, month, year } = { ...this.state, ...state };
    const { onChange, value } = this.props.input;

    if (date && month && year) {
      onChange(new Date(year, month - 1, date));
    } else if (value) {
      onChange(null);
    }
  }

  async onSubmit(e) {
    e.preventDefault
    console.log("Submit start");
    var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    var tag = this.state.tag;
    var monat = this.state.monat;
    var jahr = this.state.jahr;
    var gebDat = tag + "." + monat + "." + jahr;
    var birthDay = new Date(jahr, monat - 1, tag);
    var birthDayString = birthDay.toString();

    var gen = parseInt(this.state.gender);

    this.props.editUserMutation({
      variables: {
        firstName: this.state.firstName,
        name: this.state.name,
        email: this.state.email,
        gender: gen,
        dateOfBirth: birthDayString,
        height: this.state.height,
        country: this.state.country,
        zipcode: this.state.zipcode,

      }
    });

    console.log("Submit eingetragen > email");

  }


  render() {

    console.log(this.props);
    const authToken = localStorage.getItem(AUTH_TOKEN)

    var heute = new Date();
    console.log(heute);
    const { date, month, year } = this.state;
    const thisYear = new Date().getFullYear();

    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');
    console.log(cookieuser)

    return (
      <div>
        <CheckLogin />
        <Query query={getUser} variables={{ cookieuser }}>
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
                   <div className="karte2">
                      <section className="karteUser">
                        <div class="userPic"></div>
                        <div class="edit_body">
                        <br /><br />
                        <h4>Bearbeite Dein Profil:</h4>
                      {/*<ImageUpload />*/}
                      <br /> 
                      <div className="userName">
                        <label >Name</label>
                        <input type="text" className="" id="InputNachname" placeholder={data.user.firstName} name="name" onChange={this.onChange} />
                      </div>
                      <br />
                      <div className="userName">
                        <label>Nachname</label>
                        <input type="text" className="" id="InputNachname" placeholder={data.user.name} name="name" onChange={this.onChange} />

                        <br />
                      </div>
                      <div>
                        <div className="kachel_header">Gewicht</div>
                        <input type="text" className="" id="InputNachname" placeholder="-" name="name" onChange={this.onChange} />
                      </div>
                      <div>
                        <div className="kachel_header">Größe</div>
                        <input type="text" className="f" id="InputNachname" placeholder="-" name="name" onChange={this.onChange} />
                      </div>
                      <div>
                        <div className="kachel_header">Geschlecht</div>
                        <input type="text" className="" id="InputNachname" placeholder={data.user.gender} name="name" onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                      <label>Geburtstag</label>
                      <input type="text" className="" id="InputNachname" placeholder={data.user.dateOfBirth} name="name" onChange={this.onChange} />
                    </div>
                    <br />
                        <label>Email</label>
                        <input type="text" className="" id="InputNachname" placeholder={data.user.email} name="name" onChange={this.onChange} />
                    <br /><br />
                        <label>Land</label>
                        <input type="text" className="" id="InputNachname" placeholder="-" name="name" onChange={this.onChange} />
                      <br /><br />
                        <label>PLZ</label>
                        <input type="text" className="" id="InputNachname" placeholder="-" name="name" onChange={this.onChange} />
                      <div className="form-group">


                      </div>
                      <br />
                      <br />

                      <button className="btn btn-basic" onClick={this.handlePageChange}>Speichern</button>
                    <br /><br />


                    <br /><br />
                  </div>
                  
                  </section>
                  </div>
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

function getOptions(start, end) {
  const options = [];

  for (let i = start; i <= end; i++) {
    options.push(<option key={i}>{i}</option>)
  }

  return options;
}

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
        }
      }`;

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
  }
`
//export default graphql(ALL_USERS_QUERY, { name: 'allUsersQuery'})(Register)

/*export default compose(
  graphql(newUserMutation, { name: 'newUserMutation'}),
  withRouter
)(Register);*/

export default EditUser;
