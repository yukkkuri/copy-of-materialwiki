import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/nav/Navbar'

import UserDashboard from './components/user/dashboard/Dashboard'
import ManufacturerDashboard from './components/manufacturer/dashboard/Dashboard'

import HomePage from './components/main/Home'

import UserSignIn from './components/user/auth/SignIn'
import UserSignUp from './components/user/auth/SignUp'
import ManufacturerSignIn from './components/manufacturer/auth/SignIn'
import ManufacturerSignUp from './components/manufacturer/auth/SignUp'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path='/user-signin' component={UserSignIn} />
            <Route path='/user-signup' component={UserSignUp} />
            <Route path='/manufacturer-signin' component={ManufacturerSignIn} />
            <Route path='/manufacturer-signup' component={ManufacturerSignUp} />

            <Route path="/manufacturer/:uid" component={ManufacturerDashboard} />
            {/* <Route path="/manufacturer/:uid" component={ManufacturerDashboard} /> */}            
            <Route path="/user/" component={UserDashboard} />
            {/* <Route path="/user/:uid" component={UserDashboard} /> */}

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
