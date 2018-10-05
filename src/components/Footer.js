import React, { Component } from 'react';

class Footer extends Component {

render(){
  return(
    <div>
      <footer>
        <nav id="nav-footer">
          <ul id="ul-left-footer">
            <li id="" className="li-footer li-footer-left"><a href="#"><i className="fa fa-flag-o icons-footer"></i></a></li>
            <li id="" className="li-footer li-footer-left"><a href="#"><i className="fa fa-soccer-ball-o icons-footer"></i></a></li>
          </ul>
          <ul id="ul-right-footer">
            <li id="" className="li-footer li-footer-right"><a href="#"><i className="fa fa-envelope icons-footer"></i></a></li>
            <li id="" className="li-footer li-footer-right"><a href="#"><i className="fa fa-users icons-footer"></i></a></li>
          </ul>
        </nav>
      </footer>
    </div>


    )//End return
  }//End render
}//End Footer

export default Footer
