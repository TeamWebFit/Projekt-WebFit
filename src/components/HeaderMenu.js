import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import CheckLogin from './CheckLogin';
import $ from 'jquery';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Headermenu extends Component {
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
                                                <img className="img-responsive img-rounded" src={logo} alt="User picture" />
                                            </div>
                                        </div>
                                        <hr />
                                            
                                            <li>
                                                <NavLink to="/">
                                                    <i id="icon_menu" className="fa fa-lock"></i>
                                                    <span className="menu_font">Datenschutz</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/">
                                                    <i id="icon_menu" className="fa fa-info"></i>
                                                    <span className="menu_font">AGB & Impressum</span>
                                                </NavLink>
                                            </li>
                                            <hr />
                                            <li>
                                                <NavLink to="/">
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
            
            
export default Headermenu
