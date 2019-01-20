import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Router imports
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './pages/Demo';
import Welcome from './components/Welcome';
import User from './pages/user';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Verify from './pages/Verify';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import Trackermanager from './pages/Trackermanager';
import Logout from './pages/Logout';

import BarChart from './components/BarChart'
import AreaChart from './components/AreaChart'
import PieChart from './components/PieChart'
import TrackerManagerAdd from './components/trackermanager/Add'
import TrackerManagerAddSuccess from './components/trackermanager/Add-Success'
import TrackerManagerConnectorFitbit from './components/trackermanager/connector/fitbit'
import TrackerManagerConnectorGoogle from './components/trackermanager/connector/google'

import Edit from './pages/Edit';
import Datenschutz from './pages/Datenschutz';
import Goals from './pages/Goals';
import Workouts from './pages/Workouts';
import Community from './pages/Community';
import Impressum from './pages/Impressum';
import AddButton from './components/AddButton';

//Statistiken
import Statistiken from './pages/Statistiken';
import Schritte from './pages/Schritte';
import Puls from './pages/Puls';
import Gewicht from './pages/Gewicht';

import HeaderMenu from './components/HeaderMenu';
import Sidebar from './components/Sidebar'

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LastWorkout from './components/LastWorkout';

import LoggedoutDatenschutz from './pages/Loggedout_Datenschutz';
import LoggedoutImpressum from './pages/Loggedout_Impressum';

import BarChartWeeklyStatistiken from './components/BarChartWeeklyStatistiken';

import Stepslist from './components/Stepslist';


// Don't link any component (except Header & Footer)
// Please include new pages through react-router here


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="App">
        <Sidebar />

          <div className="main">
            {/* React-Router - Route */}
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={400}
                  classNames="fade"
                >
                  <Switch>

                    <Route exact path="/" component={Dashboard} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/home" component={Dashboard} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/verify" component={Verify} />
                    <Route path="/resetPassword" component={ResetPassword} />
                    <Route path="/newPassword" component={NewPassword} />

                    {/* Tracker-Manager */}
                    <Route exact path="/trackermanager" component={Trackermanager} />
                    <Route exact path="/trackermanager/add" component={TrackerManagerAdd} />
                    <Route exact path="/trackermanager/connector/fitbit" component={TrackerManagerConnectorFitbit} />
                    <Route exact path="/trackermanager/connector/google" component={TrackerManagerConnectorGoogle} />
                    <Route exact path="/trackermanager/add/success" component={TrackerManagerAddSuccess} />

                    {/* Tracker-Manager ENDE */}
                    <Route path="/logout" component={Logout} />
                    <Route path="/BarChart" component={BarChart} />
                    <Route path="/AreaChart" component={AreaChart} />
                    <Route path="/PieChart" component={PieChart} />
                    <Route path="/LastWorkout" component={LastWorkout} />
                    <Route path="/edit" component={Edit} />
                    <Route path="/datenschutz" component={Datenschutz} />
                    <Route path="/goals" component={Goals} />
                    <Route path="/impressum" component={Impressum} />
                    <Route path="/community" component={Community} />
                    <Route path="/workouts" component={Workouts} />
                    <Route path="/button" component={AddButton} />
                    <Route path="/datenschutzl" component={LoggedoutDatenschutz} />
                    <Route path="/impressuml" component={LoggedoutImpressum} />


                    {/* Statistiken */}
                    <Route path="/statistiken" component={Statistiken} />
                    <Route path="/puls" component={Puls} />
                    <Route path="/schritte" component={Schritte} />
                    <Route path="/gewicht" component={Gewicht} />
                    <Route path="/BarChartWeeklyStatistiken" component={BarChartWeeklyStatistiken} />
                    <Route path="/schritteliste" component={Stepslist} />
                    {/*<div id="registrationTrue"></div>*/}
                    {/* React-Router - Route End */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
