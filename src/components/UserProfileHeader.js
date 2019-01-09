import React, { Component } from 'react';
import { } from 'react-bootstrap';
import CheckLogin from '../components/CheckLogin'
import UserProfile from '../components/UserProfile'
import { withCookies, Cookies } from 'react-cookie';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import $ from 'jquery';
import Alert from '../components/Alert';
import { Mutation } from 'react-apollo'

// ===================
// User Page
// A page for testing all components
// ===================

class UserProfileHeader extends Component {


      constructor(props) {
          super(props);
          this.onClickPen = this.onClickPen.bind(this);
          this.onClickCheck = this.onClickCheck.bind(this);
          this.handlePageChange = this.handlePageChange.bind(this);
      }

  componentDidMount(){
    $('#check').hide();
  }

  onClickPen(){
    console.log("onClickPen");
    $('.inp').removeAttr("disabled");
    $('#pen').hide();
    $('#check').show();

  }

  onClickCheck(e){
    e.preventDefault

    $('#check').hide();


    const cookies = new Cookies();
    var cookieuser = cookies.get('webfit_user');

    var fn = this.props.user.firstName;
    var n = this.props.user.name;
    var g = this.props.user.gender;
    var d = this.props.user.dateOfBirth;
    var h = 172;

    this.props.editUserMutation({
      variables: {
        id: cookieuser,
        firstName: fn,
        name: n,
        gender: g,
        dateOfBirth: d,
        height: h
      }
    })
    console.log("Daten gespeichert");


  }

  handlePageChange(){
    window.location = "/home";
  }

  render() {
    const cookies = new Cookies();
    var id = cookies.get('webfit_user');
    var height = 175;
    const { firstName, name, gender, dateOfBirth } = this.props.user
    var gen = parseInt(gender);
    console.log(gender);

    return (
      <div>
        <i id="arrow" onClick={this.handlePageChange} className="fa fa-arrow-left"></i>
        <i id="pen" onClick={this.onClickPen} className="fa fa-pencil"></i>
        <Mutation
          mutation={EDIT_USER}
          variables={{ id, firstName, name, gen, dateOfBirth, height }}
          onCompleted={data => this._confirm(data)}
        >
          {mutation => (
            <i id="check" onClick={mutation} className="fa fa-check"></i>
          )}
        </Mutation>
      </div>
    )
  }
  _confirm = async data => {
    console.log("gespreichert");
    $('.inp').attr("disabled","disabled");
    $('#check').hide();
    $('#pen').show();

  }//end confirm
}//end component



const EDIT_USER = gql`
  mutation EditUserMutation($id: ID!, $firstName: String, $name: String, $gen: Int, $dateOfBirth: String, $height: Int)
  {  editUser (
      id: $id,
      firstName: $firstName,
      name: $name,
      gender: $gen,
      dateOfBirth: $dateOfBirth,
      height: $height
    )
    {
      id
      firstName
      name
      gender
      dateOfBirth
      height
    }
  }
`

export default UserProfileHeader;
