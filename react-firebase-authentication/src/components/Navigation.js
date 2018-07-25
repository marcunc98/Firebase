import React from "react";
import { Link } from "react-router-dom";
// This file uses the Link component of React Router to link the application to different routes.
// These routes are defined in your constants file.

import AuthUserContext from './AuthUserContext';
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

//Overall, this component is making the Navigation component aware of the user's authentication status
//More specifically, Inside of the Consumer component, you are using a function instead of other components.
//That’s called the render props pattern in React. What’s important that it gives you access to the value 
//which was passed before to the Provider pattern. Once the authenticated user in the withAuthentication higher 
//order component changes, it changes as well as the passed value in the Provider component, and then also in the
//Consumer component. You don’t need to pass the authenticated user down from the App component anymore. It is
// passed through it implicitly by using React’s context.

//** use this ternary code when using authUser as seen below */
const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth {...authUser}/>
      : <NavigationNonAuth {...authUser}/>
    }
  </AuthUserContext.Consumer>
//Inside of the Consumer component, you are using a function instead of other components. That’s called the render 
//props pattern in React. What’s important that it gives you access to the value which was passed before to the Provider pattern.
//Once the authenticated user in the withAuthentication higher order component changes, it changes as well as the passed value in 
//the Provider component, and then also in the Consumer component. Notice that you don’t need to pass the authenticated user down 
//from the App component anymore. It is passed through it implicitly by using React’s context.


const NavigationAuth = (authUser) => (
  <ul>
    <h1> {authUser.uid} </h1>
    <h1> {authUser.email} </h1>
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

const NavigationNonAuth = (authUser) => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
  </ul>
);

export default Navigation;
