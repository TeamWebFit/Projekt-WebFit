import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import AddButton from './AddButton';

class Footer extends Component {

render(){
  return(
    <div>
       <AddButton />
      <footer>
     
        <nav id="nav-footer">
          <ul id="ul-left-footer">
            <li className="li-footer li-footer-left"><NavLink to="/goals"><i className="fa fa-flag-o icons-footer"></i></NavLink></li>
            <li className="li-footer li-footer-left"><NavLink to="/workouts"><i className="fa fa-soccer-ball-o icons-footer"></i></NavLink></li>
          </ul>
          
          <ul id="ul-right-footer">
            <li className="li-footer li-footer-right"><NavLink to="/messages"><i className="fa fa-envelope icons-footer"></i></NavLink></li>
            <li className="li-footer li-footer-right"><NavLink to="/community"><i className="fa fa-users icons-footer"></i></NavLink></li>
          </ul>
        </nav>
      </footer>
    </div>


    )//End return
  }//End render
}//End Footer

export default Footer
