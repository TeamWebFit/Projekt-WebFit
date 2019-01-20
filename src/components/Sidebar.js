import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import CheckLogin from './CheckLogin';
import $ from 'jquery';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withCookies, Cookies } from 'react-cookie';
import ReactLoading from 'react-loading';
import { Tooltip, OverlayTrigger } from "react-bootstrap";

class Sidebar extends Component {
    componentDidMount() {

        var url = window.location.pathname;
        var user = "/user";
        var login = "/login";
        var register = "/register";
        var logout = "/logout";
        var impressum = "/impressuml";
        var datenschutz = "/datenschutzl";
        //menu_header
        if (url === login) {
            $('#toggle-loggedout').show();
            $('#toggle-sidebar').hide();
            $('#toggle-slimbar').hide();
        };
        if (url === logout) {
            $('#toggle-loggedout').show();
            $('#toggle-sidebar').hide();
            $('#toggle-slimbar').hide();
        };
        if (url === register) {
            $('#toggle-loggedout').show();
            $('#toggle-sidebar').hide();
            $('#toggle-slimbar').hide();
        };
        if (url === impressum) {
            $('#toggle-loggedout').show();
            $('#toggle-sidebar').hide();
            $('#toggle-slimbar').hide();
        };
        if (url === datenschutz) {
            $('#toggle-loggedout').show();
            $('#toggle-sidebar').hide();
            $('#toggle-slimbar').hide();
        };
        if (url === user) {
            $('#nav-header').hide();

        } else {
            //menu_header
            $('#close-icon').click(function () {
                $('#toggle-sidebar').toggle();
                // $('#toggle-slimbar').show();
                $('#toggle-slimbar').show();
                $('.overlay').hide();
                $('#toggle-loggedout').hide();
            })
            $('.navicon').click(function () {
                $('#toggle-sidebar').toggle();
                $('#toggle-slimbar').hide();
                $('.overlay').show();
                $('#toggle-loggedout').hide();
            })
        }

    }


    render() {


        const tooltip_profile = (
            <Tooltip id="tooltip">
                Profil
            </Tooltip>
        );
        const tooltip_dashboard = (
            <Tooltip id="tooltip">
                Dashboard
            </Tooltip>
        );
        const tooltip_tm = (
            <Tooltip id="tooltip">
                Trackermanager
            </Tooltip>
        );
        const tooltip_goals = (
            <Tooltip id="tooltip">
                Ziele
            </Tooltip>
        );
        const tooltip_workout = (
            <Tooltip id="tooltip">
                Workouts
            </Tooltip>
        );
        const tooltip_stats = (
            <Tooltip id="tooltip">
                Statistiken
            </Tooltip>
        );
        const tooltip_data = (
            <Tooltip id="tooltip">
                Datenschutz
            </Tooltip>
        );
        const tooltip_agb = (
            <Tooltip id="tooltip">
                AGB & Impressum
            </Tooltip>
        );
        const tooltip_logout = (
            <Tooltip id="tooltip">
                Ausloggen
            </Tooltip>
        );

        const cookies = new Cookies();
        var cookieuser = cookies.get('webfit_user');
        console.log(cookieuser);
        return (
            <div>
                {/* <div className="overlay"></div> */}
                <header>
                    <nav id="nav-header">
                        <NavLink to="/"><img id="logo" alt="WebFit Application Logo" src={logo} height="50" width="auto" /></NavLink>

                        <div id="toggle-sidebar" >

                            <i id="close-icon" className=" fa fa-times"></i>
                            <div id="sidebar">
                                <ul className="ul-sidebar">
                                <div id="">
                                <Query query={getUser} variables={{ cookieuser }}>
                                          {({ loading, error, data }) => {
                                            if (loading) return <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
                                            if (error) return <div>Error</div>
                                            console.log(data.user);
                                            if(data.user === null || data.user.length <= 0)
                                              {
                                                var url = "https://server.webfit.app:4009/public/files/5c3a79821410f30a6dec7e78_1547730951406_profilePic_dummy_quad.jpg";
                                                return(
                                                  <div className="">
                                                      <div className="user-pic">
                                                        <img id="userPicSidebar" src={url}></img>
                                                      </div>
                                                      <br />
                                                      <div className="">
                                                          <span className="">Vorname
                                                              <strong> Nachname</strong>
                                                          </span>
                                                          <br />
                                                      </div>
                                                  </div>
                                                )
                                                }else {
                                                  var url = "https://server.webfit.app:4009/public/files/"+data.user.profilePic;
                                                  var vorname = data.user.firstName;
                                                  var nachname = data.user.name;

                                                  return(
                                                    <div className="">
                                                        <div className="user-pic">
                                                          <img id="userPicSidebar" src={url}></img>
                                                        </div>
                                                        <br />
                                                        <div className="">
                                                            <span className="">{vorname}
                                                                <strong> {nachname}</strong>
                                                            </span>
                                                            <br />
                                                        </div>
                                                    </div>
                                                  )
                                                }

                                              }}
                                        </Query>
                                        <br />
                                        <hr className="hr-sidebar" />
                                        <li className="sidebar-menu">
                                            <NavLink to="/user">
                                                <i id="icon_menu" className="fa fa-user"></i>
                                                <span className="menu_font">Profil</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <i id="icon_menu" className="fa fa-tachometer"></i>
                                                <span className="menu_font">Dashboard</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/trackermanager">
                                                <i id="icon_menu" className="fa fa-clock-o"></i>
                                                <span className="menu_font">Trackermanager</span>
                                            </NavLink>
                                        </li>
                                        <li>

                                            <NavLink to="/statistiken">

                                                <i id="icon_menu" className="fa fa-bar-chart-o"></i>
                                                <span className="menu_font">Statistiken</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/goals">
                                                <i id="icon_menu" className="fa fa-flag-checkered"></i>
                                                <span className="menu_font">Ziele</span>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/workouts">
                                                <i id="icon_menu" className="fa fa-bicycle"></i>
                                                <span className="menu_font">Workouts</span>
                                            </NavLink>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        {/* <li>
                                            <NavLink to="/">
                                                <i id="icon_menu" className="fa fa-gear"></i>
                                                <span className="menu_font">Einstellungen</span>
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/datenschutz">
                                                <i id="icon_menu" className="fa fa-lock"></i>
                                                <span className="menu_font">Datenschutz</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/impressum">
                                                <i id="icon_menu" className="fa fa-info"></i>
                                                <span className="menu_font">AGB & Impressum</span>
                                            </NavLink>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        <li>
                                            <NavLink to="/logout">
                                                <i id="icon_menu" className="fa fa-power-off"></i>
                                                <span className="menu_font">Ausloggen</span>
                                            </NavLink>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div id="toggle-slimbar">
                            <i id="close-icon" className="navicon fa fa-navicon"></i>
                            <div id="slimbar">
                                <ul className="ul-slimbar">
                                    <div id="">
                        
                                    <Query query={getUser} variables={{ cookieuser }}>
                                        {({ loading, error, data }) => {
                                          if (loading) return <ReactLoading className="loading-screen-animation" type="spinningBubbles" color="#000000" height={'50%'} width={'50%'} />
                                          if (error) return <div>Error</div>
                                          if(data.user === null || data.user.length <= 0)
                                          {
                                            var url = "https://server.webfit.app:4009/public/files/5c3a79821410f30a6dec7e78_1547730951406_profilePic_dummy_quad.jpg";
                                            return(
                                              <div className="">
                                                  <div className="user-pic-slim">
                                                    <img id="userPicSidebarSlim" src={url}></img>
                                                  </div>
                                              </div>
                                            )
                                          }else {
                                            var url = "https://server.webfit.app:4009/public/files/"+data.user.profilePic;
                                            var vorname = data.user.firstName;
                                            var nachname = data.user.name;
                                            return(
                                              <div className="">
                                                  <div className="user-pic-slim">
                                                    <img id="userPicSidebarSlim" src={url}></img>
                                                  </div>
                                              </div>
                                            )
                                          }
                                        }}
                                      </Query>

                                        <br />
                                        <hr className="hr-sidebar" />

                                        <li className="sidebar-menu">
                                            <OverlayTrigger placement="left" overlay={tooltip_profile}>
                                                <NavLink to="/user">

                                                    <i id="icon_slim" className="fa fa-user"></i>

                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_dashboard}>
                                                <NavLink to="/">
                                                    <i id="icon_slim" className="fa fa-tachometer"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_tm}>
                                                <NavLink to="/trackermanager">
                                                    <i id="icon_slim" className="fa fa-clock-o"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_stats}>
                                                <NavLink to="/statistiken">
                                                    <i id="icon_slim" className="fa fa-bar-chart-o"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_goals}>
                                                <NavLink to="/goals">
                                                    <i id="icon_slim" className="fa fa-flag-checkered"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_workout}>
                                                <NavLink to="/workouts">
                                                    <i id="icon_slim" className="fa fa-bicycle"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        {/* <li>
                                            <NavLink to="/">
                                                <i id="icon_slim" className="fa fa-gear"></i>
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_data}>
                                                <NavLink to="/datenschutz">
                                                    <i id="icon_slim" className="fa fa-lock"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_agb}>
                                                <NavLink to="/impressum">
                                                    <i id="icon_slim" className="fa fa-info"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        <li>
                                            <OverlayTrigger placement="left" overlay={tooltip_logout}>
                                                <NavLink to="/logout">
                                                    <i id="icon_slim" className="fa fa-power-off"></i>
                                                </NavLink>
                                            </OverlayTrigger>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div id="toggle-loggedout">
                            <NavLink to="/datenschutzl">
                                <span className="menu_font">Datenschutz</span>
                            </NavLink>
                            <NavLink to="/impressuml">
                                <span className="menu_font">AGB & Impressum</span>
                            </NavLink>
                        </div>

                    </nav>
                </header>
            </div>


        )//End return
    }//End render
}//End Header

const getUser = gql`
        query Cookieuser($cookieuser: ID){
          user(id: $cookieuser){
            id,
            name,
            firstName,
            email,
            dateOfBirth,
            gender,
            height,
            profilePic
          }
        }
        `

export default Sidebar;
