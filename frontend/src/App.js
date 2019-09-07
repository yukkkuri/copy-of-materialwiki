import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/nav/Navbar'
import HomePage from './components/main/Home'
import UserPage from './components/user/userPage'
import UserSignIn from './components/user/auth/SignIn'
import UserSignUp from './components/user/auth/SignUp'




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/:uid" component={UserPage} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
