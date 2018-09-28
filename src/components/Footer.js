import React, { Component } from 'react';

class Footer extends Component {

render(){
  return(
    <div>
      <footer>
        <nav id="nav-footer">
          <ul id="ul-left-footer">
            <li className="li-footer li-footer-left"><i className="fa fa-flag-o icons-footer"></i></li>
            <li className="li-footer li-footer-left"><i className="fa fa-soccer-ball-o icons-footer"></i></li>
          </ul>
          <ul id="ul-right-footer">
            <li className="li-footer li-footer-right"><i className="fa fa-envelope icons-footer"></i></li>
            <li className="li-footer li-footer-right"><i className="fa fa-users icons-footer"></i></li>
          </ul>
        </nav>
      </footer>
    </div>


    )//End return
  }//End render
}//End Footer

export default Footer
