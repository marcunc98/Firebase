import React from "react";
import { Link } from "react-router-dom";
// This file uses the Link component of React Router to link the application to different routes.
// These routes are defined in your constants file.

import AuthUserContext from './AuthUserContext';
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

//making the Navigation component aware of the authenticated user to display different options depending on it
const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
//Inside of the Consumer component, you are using a function instead of other components. That’s called the render 
//props pattern in React. What’s important that it gives you access to the value which was passed before to the Provider pattern.
//Once the authenticated user in the withAuthentication higher order component changes, it changes as well as the passed value in 
//the Provider component, and then also in the Consumer component. Notice that you don’t need to pass the authenticated user down 
//from the App component anymore. It is passed through it implicitly by using React’s context.


const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
