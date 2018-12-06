import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Router imports
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './pages/Demo';
import Welcome from './components/Welcome';
import profil from './pages/user';
import Register from './pages/Register';
import Login from './pages/Login';
import Verify from './pages/Verify';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import Trackermanager from './pages/Trackermanager';
import Logout from './pages/Logout';
import BarChart from './components/BarChart'
import AreaChart from './components/AreaChart'
import PieChart from './components/PieChart'


// Don't link any component (except Header & Footer)
// Please include new pages through react-router here

const checkRegistrationStatus = () => {
  if(status.registration === "true"){
    alert("Registrierung erfolgreich")
  }
}

const queryString = require('query-string');
const status = queryString.parse(window.location.search);
console.log(status.registration);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      registrationStatus: ''
    };
  }

  componentWillMount(){
    console.log('componentWillMount');
    checkRegistrationStatus();
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="App">
          <Header />
            <div className="main">
            {/* React-Router - Route */}
              <Route exact path="/" component={Welcome} />
              <Route path="/demo" component={Demo} />
              <Route path="/user" component={profil} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/verify" component={Verify} />
              <Route path="/resetPassword" component={ResetPassword} />
              <Route path="/newPassword" component={NewPassword} />
              <Route path="/trackermanager" component={Trackermanager} />
              <Route path="/logout" component={Logout} />
              <Route path="/BarChart" component={BarChart} />
              <Route path="/AreaChart" component={AreaChart} />
              <Route path="/PieChart" component={PieChart} />
              {/*<div id="registrationTrue"></div>*/}
            {/* React-Router - Route End */}
            </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
