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
          this.handlePageChange = this.handlePageChange.bind(this);
      }

  componentDidMount(){
    $('#check').hide();
  }

  onClickPen(){
    console.log("onClickPen");
    $('.inp').removeAttr("disabled","disabled");
    $('#pen').hide();
    $('#check').show();

  }

  handlePageChange(){
    window.location = "/home";
  }

  render() {
    const cookies = new Cookies();
    var id = cookies.get('webfit_user');

    const { firstName, name, gender, dateOfBirth, height, weight } = this.props.user;
    var ti = new Date();
    var tim = ti.getTime();
    var time = tim.toString();
    console.log(time);
    var gen = parseInt(gender);
    var hei = parseInt(height);
    var wei = parseInt(weight);
    console.log(weight);
    var date = this.props.user.dateOfBirth;
    var dOb = "";

    return (
      <div id="user-header">
        <i id="arrow" onClick={this.handlePageChange} className="fa fa-arrow-left"></i>
        <i id="pen" onClick={this.onClickPen} className="fa fa-pencil"></i>
        <Mutation
          mutation={EDIT_USER}
          variables={{ id, firstName, name, gen, dOb, hei, wei, time }}
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
  mutation EditUserMutation($id: ID!, $firstName: String, $name: String, $gen: Int, $dOb: String, $hei: Int, $wei: Float, $time: String)
  {  editUser (
      id: $id,
      firstName: $firstName,
      name: $name,
      gender: $gen,
      dateOfBirth: $dOb,
      height: $hei
      weight: $wei
      time: $time
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
