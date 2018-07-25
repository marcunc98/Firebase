import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
//The import and export (./withAuthentication) is the higher order component 
//that makes its session handling logic available to the App component. Higher order 
//components allow you to extract logic from components, but you can use them later 
//on to enhance components with it. 


//The Router component below makes it possible to navigate from URL-to-URL on the client-side application, 
//without making requests to a web server. Thus, applications need to be requested only once
// from the server, with the process of handling requested routes handled on the client side

//React’s context API is a React concept which helps us to pass around properties in our application. Rather 
//than passing props explicitly down to all components who are interested in them, you can PASS THESE PROPS  
//IMPLICITLY down to these components without bothering the components in between of the hierarchy.
//Thus, in our case, the App component doesn’t need to bother about the authenticated user object anymore,
//because it only passes it down to various other components.

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);

