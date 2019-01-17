import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import CheckLogin from './CheckLogin';
import $ from 'jquery';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Sidebar extends Component {
    componentDidMount() {
        var url = window.location.pathname;
        var user = "/user";
        var login = "/login";
        var register = "/register";
        var logout = "/logout";
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

        return (
            <div>
                {/* <div className="overlay"></div> */}
                <header>
                    <nav id="nav-header">
                        <NavLink to="/"><img id="logo" alt="WebFit Application Logo" src={logo} height="50" /></NavLink>

                        <div id="toggle-sidebar" >

                            <i id="close-icon" className=" fa fa-times"></i>
                            <div id="sidebar">
                                <ul className="ul-sidebar">
                                    <div id="">
                                        <div className="">
                                            <div className="user-pic">
                                            </div>
                                            <br />
                                            <div className="">
                                                <span className="">John
                                                    <strong> Doe</strong>
                                                </span>
                                                <br />
                                            </div>
                                        </div>
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
                                            <NavLink to="/">
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
                                        <li>
                                            <NavLink to="/">
                                                <i id="icon_menu" className="fa fa-gear"></i>
                                                <span className="menu_font">Einstellungen</span>
                                            </NavLink>
                                        </li>
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
                                        <div className="">
                                            <div className="user-pic-slim">
                                            </div>
                                        </div>
                                        <br />
                                        <hr className="hr-sidebar" />
                                        <li className="sidebar-menu">
                                            <NavLink to="/user">
                                                <i id="icon_slim" className="fa fa-user"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <i id="icon_slim" className="fa fa-tachometer"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/trackermanager">
                                                <i id="icon_slim" className="fa fa-clock-o"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <i id="icon_slim" className="fa fa-bar-chart-o"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/goals">
                                                <i id="icon_slim" className="fa fa-flag-checkered"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/workouts">
                                                <i id="icon_slim" className="fa fa-bicycle"></i>
                                            </NavLink>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        <li>
                                            <NavLink to="/">
                                                <i id="icon_slim" className="fa fa-gear"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/datenschutz">
                                                <i id="icon_slim" className="fa fa-lock"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/impressum">
                                                <i id="icon_slim" className="fa fa-info"></i>
                                            </NavLink>
                                        </li>
                                        <hr className="hr-sidebar" />
                                        <li>
                                            <NavLink to="/logout">
                                                <i id="icon_slim" className="fa fa-power-off"></i>
                                            </NavLink>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div id="toggle-loggedout">
                            <NavLink to="/">
                                <span className="menu_font">Datenschutz</span>
                            </NavLink>
                            <NavLink to="/">
                                <span className="menu_font">AGB & Impressum</span>
                            </NavLink>
                        </div>

                    </nav>
                </header>
            </div>


        )//End return
    }//End render
}//End Header

export default Sidebar
