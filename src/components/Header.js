import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import CheckLogin from './CheckLogin';
import $ from 'jquery';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    //menu_header
    $('#menu-icon').click(function () {
      $('#toggle-menu').toggle();
      $('#menu-icon').hide();
    })
    $('.close-round').click(function () {
      $('#toggle-menu').toggle();
      $('#menu-icon').show();
    })
  }

  render() {
    return (
      <div>
        <header>
          <nav id="nav-header">
            <ul id="ul-left-header">
              <li id="" className="li-header li-header-left"><NavLink to="/goals"><i className="fa fa-flag-o icons-header"></i></NavLink></li>
              <li id="" className="li-header li-header-left"><NavLink to="/workouts"><i className="fa fa-soccer-ball-o icons-header"></i></NavLink></li>
              <li id="" className="li-header li-header-left"><NavLink to="/messages"><i className="fa fa-envelope icons-header"></i></NavLink></li>
              <li id="" className="li-header li-header-left"><NavLink to="/community"><i className="fa fa-users icons-header"></i></NavLink></li>
            </ul>

            <NavLink to="/"><img id="logo" alt="WebFit Application Logo" src={logo} width="10%" /></NavLink>
            <div id="toggle-menu">
              <i id="x-icon" className="close-round fa fa-times"></i>
              <div id="btns-toggle">
                <NavLink to="/user" className="close-round"><div id="btn-toggle-left" className="btn-round btn-toggle"><i className="fa fa-user icon-toggle"></i></div></NavLink>
                <NavLink to="/trackermanager" className="close-round"><div id="btn-toggle-middle" className="btn-round btn-toggle"><i className="fa fa-cog icon-toggle"></i></div></NavLink>
                <NavLink to="/datenschutz" className="close-round"><div id="btn-toggle-right" className="btn-round btn-toggle"><i className="fa fa-unlock icon-toggle"></i></div></NavLink>
              </div>
            </div>
            <i id="menu-icon" className="fa fa-navicon"></i>
          </nav>
        </header>
      </div>


    )//End return
  }//End render
}//End Header

export default Header
