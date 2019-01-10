import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import CheckLogin from './CheckLogin';
import $ from 'jquery';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Sidebar extends Component {
    componentDidMount() {
        //menu_header
        $('#menu-icon').click(function () {
            $('#toggle-sidebar').toggle();
            $('#menu-icon').hide();
        })
        $('.close-round').click(function () {
            $('#toggle-sidebar').toggle();
            $('#menu-icon').show();
        })
    }

    render() {
        
        return (
            <div>
                <header>
                    
                    <nav id="nav-header">
                        <NavLink to="/"><img id="logo" alt="WebFit Application Logo" src={logo} height="50" /></NavLink>

                        <div id="toggle-sidebar">
                            <i id="close-icon" className="close-round fa fa-times"></i>
                            <div id="sidebar">
                                <ul>
                                    <div id="">
                                        <div className="">
                                            <div className="user-pic">
                                                <img className="img-responsive img-runded" src={logo} alt="User picture" height="20%" />
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
                                        <hr />
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
                                                <NavLink to="/">
                                                    <i id="icon_menu" className="fa fa-balance-scale"></i>
                                                    <span className="menu_font">Gewicht</span>
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
                                            <hr />
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
                                            <hr />
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
                            <i id="menu-icon" className="fa fa-navicon"></i>
          </nav>
        </header>
      </div>


                )//End return
              }//End render
            }//End Header
            
            export default Sidebar
