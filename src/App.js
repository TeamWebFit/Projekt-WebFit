import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Router imports
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './pages/Demo';
import Welcome from './components/Welcome';
import profil from './pages/user';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './components/Home';
import Verify from './pages/Verify';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import Trackermanager from './pages/Trackermanager';
import Logout from './pages/Logout';
import BarChart from './components/BarChart';
import AreaChart from './components/AreaChart';
import PieChart from './components/PieChart';
import Edit from './pages/Edit';
import Datenschutz from './pages/Datenschutz';
import Goals from './pages/Goals';
import Workouts from './pages/Workouts';
import Community from './pages/Community';
import Messages from './pages/Messages';



import { CSSTransition, TransitionGroup } from 'react-transition-group';


// Don't link any component (except Header & Footer)
// Please include new pages through react-router here

const checkRegistrationStatus = () => {
  if (status.registration === "true") {
    alert("Registrierung erfolgreich")
  }
}

const queryString = require('query-string');
const status = queryString.parse(window.location.search);
console.log(status.registration);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registrationStatus: ''
    };
  }

  componentWillMount() {
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
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={400}
                  classNames="fade"
                >
                  <Switch location={location}>

                    <Route exact path="/" component={Home} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/home" component={Home} />
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
                    <Route path="/edit" component={Edit} />
                    <Route path="/datenschutz" component={Datenschutz} />
                    <Route path="/goals" component={Goals} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/community" component={Community} />
                    <Route path="/workouts" component={Workouts} />



                    {/*<div id="registrationTrue"></div>*/}
                    {/* React-Router - Route End */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
