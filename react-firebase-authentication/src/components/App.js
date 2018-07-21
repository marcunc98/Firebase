import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
//In your App component, you can specify which components should show up according 
//to corresponding routes with the help of the Route component from React Router.

//So if a route matches a path, the respective component will be displayed. 
//Thus all the page components in the App component are exchangeable by changing the route(below i.e. ./Home),
//but the Navigation component stays fixed independently of any route change

//may want to create a protect route - will prevent folks who are not authorized from viewing the page
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import { firebase } from "../firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  // componentDidMount used as a listener for the authenticated user which is our implicit session state.
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }
// The helper function onAuthStateChanged() gets a function as input and this function has access to the 
//authenticated user object. In addition, this passed function is called EVERY TIME something changed for 
//the authenticated user. It is called when a user signs up (because it results in a sign in), signs in and 
//signs out. If a user signs out, the authUser object becomes null. Thus the authUser property in the local 
//state is set to null as well and as reaction components depending on it can display different options 
//(e.g. Navigation component).

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>
          <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
          </div>
          </Router>
    )
  }
}


export default App;
