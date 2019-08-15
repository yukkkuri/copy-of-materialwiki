import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/nav/Navbar'

import UserDashboard from './components/user/dashboard/Dashboard'
import ManufacturerDashboard from './components/manufacturer/dashboard/Dashboard'

import HomePage from './components/main/Home'
import PinPage from './components/pin/PinPage'

import UserSignIn from './components/user/auth/SignIn'
import UserSignUp from './components/user/auth/SignUp'
import ManufacturerSignIn from './components/manufacturer/auth/SignIn'
import ManufacturerSignUp from './components/manufacturer/auth/SignUp'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper rel">
            <Navbar />
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pin/:pid" component={PinPage} />

            </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
