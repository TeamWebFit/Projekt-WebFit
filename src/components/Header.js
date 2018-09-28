import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/img/logo.png';

class Header extends Component {

render(){
  return(
    <div>
      <header>
        <nav id="nav-header">
          <img id="logo" src={logo} width="20%"/>
          <div id="toggle-menu">
            <i id="x-icon" className="fa fa-times"></i>
            <div id="btns-toggle">
              <div id="btn-toggle-left" className="btn-round btn-toggle"><i className="fa fa-user icon-toggle"></i></div>
              <div id="btn-toggle-middle" className="btn-round btn-toggle"><i className="fa fa-cog icon-toggle"></i></div>
              <div id="btn-toggle-right" className="btn-round btn-toggle"><i className="fa fa-unlock icon-toggle"></i></div>
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
