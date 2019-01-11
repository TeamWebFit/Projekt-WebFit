import React, { Component } from 'react';
import { } from 'react-bootstrap';
import Alert from '../components/Alert'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants/constants'
import header from '../assets/img/header.png';
import profilbild from '../assets/img/profilbild.png';
import CheckLogin from '../components/CheckLogin'
import { withCookies, Cookies } from 'react-cookie';
import $ from 'jquery';
import UserProfileHeader from '../components/UserProfileHeader'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KAT_1727 from '../assets/img/KAT_1727.jpg';
import axios from 'axios';

// ===================
// User Profile Picture
//
// ===================

class UserProfilePic extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            selectedFile: null,
            loaded: 0,
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    off(){
      $('.overlay').hide();
      $('#uploadFileDiv').hide();
      $('#uploadFile').hide();
      $('#uploadButton').hide();
    }

    on(){
      $('.overlay').show();
      $('#uploadFileDiv').show();
      $('#uploadFile').show();
      $('#uploadButton').show();
    }

    handleselectedFile = event => {
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    }

    handleUpload = () => {
      const cookies = new Cookies();
      var cookieuser = cookies.get('webfit_user');
      var dateUpload = new Date();
      var uploadDate = dateUpload.getTime();
      const data = new FormData()
      data.append('file', this.state.selectedFile, cookieuser + "_" + uploadDate + "_" + this.state.selectedFile.name )

      axios.post('https://server.webfit.app:4009/upload', data, {
          onUploadProgress: ProgressEvent => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
            })
          },
        })
        .then(res => {
          console.log(res.statusText)
          if(res.statusText==="OK"){
            window.location.reload();
          }
        })

    }

    render() {
      var picName = this.props.user;
      console.log(picName);
      var url = "https://server.webfit.app:4009/public/files/"+picName;
        return (
          <div>
            <div className="overlay" onClick={this.off}></div>
            <div id="profilePicDiv">
              <img id="profilePic" src={url}></img>
            </div>
            <div id="camPicIconDiv">
              <div id="camCircle">
                <i id="camPicIcon" className="fa fa-camera" onClick={this.on}></i>
              </div>
            </div>
            <div id="uploadFileDiv">
              <input type="file" name="uploadFile" id="uploadFile" onChange={this.handleselectedFile} />
              <div className="btn-whiteline" id="uploadButton" onClick={this.handleUpload}>Upload</div>
              <div id="percentUpload"> {Math.round(this.state.loaded,2) } %</div>
            </div>
        </div>
        )//end return

    }

} //End User Component

export default UserProfilePic;
