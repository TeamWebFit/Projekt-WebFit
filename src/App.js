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
import PrivateRoute from '../../containers/PrivateRoute';

// Don't link any component (except Header & Footer)
// Please include new pages through react-router here


class App extends Component {
  render() {
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
            {/* React-Router - Route End */}
            </div>
        <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
