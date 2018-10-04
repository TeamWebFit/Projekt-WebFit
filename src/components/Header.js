import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

import $ from 'jquery'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

class Header extends Component {
  componentDidMount(){
    //menu_header
    $('#menu-icon').click(function(){
     $('#toggle-menu').toggle();
     $('#menu-icon').hide();
   })
   $('.close-round').click(function(){
     $('#toggle-menu').toggle();
     $('#menu-icon').show();
   })
 }

render(){
  return(
    <div>
      <header>
        <nav id="nav-header">
          <NavLink to="/"><img id="logo" alt="WebFit Application Logo" src={logo} width="20%"/></NavLink>
          <div id="toggle-menu">
            <i id="x-icon" className="close-round fa fa-times"></i>
            <div id="btns-toggle">
              <NavLink to="/user" className="close-round"><div id="btn-toggle-left" className="btn-round btn-toggle"><i className="fa fa-user icon-toggle"></i></div></NavLink>
              <NavLink to="/demo" className="close-round"><div id="btn-toggle-middle" className="btn-round btn-toggle"><i className="fa fa-cog icon-toggle"></i></div></NavLink>
              <NavLink to="/demo" className="close-round"><div id="btn-toggle-right" className="btn-round btn-toggle"><i className="fa fa-unlock icon-toggle"></i></div></NavLink>
            </div>
          </div>
          <i id="menu-icon" className="fa fa-user"></i>
        </nav>
      </header>
    </div>


    )//End return
  }//End render
}//End Header

export default Header
