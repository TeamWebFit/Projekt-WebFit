import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Router imports
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './pages/Demo';
import Welcome from './components/Welcome';
import notfound from './pages/404';
import profil from './pages/user';
import login from './pages/Login';
import Register from './pages/Register';
import * as qs from 'query-string';
import Alert from './components/Alert';

// Don't link any component (except Header & Footer)
// Please include new pages through react-router here

const checkRegistrationStatus = () => {
  if(status.registration == "true"){
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
              <Route path="/login" component={login} />
              <Route path="/user" component={profil} />
              <Route path="/register" component={Register} />
              <div id="registrationTrue"></div>
            {/* React-Router - Route End */}
            </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
