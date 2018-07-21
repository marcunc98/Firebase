import React from "react";
import { Link } from "react-router-dom";
// This file uses the Link component of React Router to link the application to different routes.
// These routes are defined in your constants file.

// import AuthUserContext from './AuthUserContext';
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

// ADD THIS CODE AFTER UPDATING HIGH ORDER CODE//
// const Navigation = () =>
//   <AuthUserContext.Consumer>
//     {authUser => authUser
//       ? <NavigationAuth />
//       : <NavigationNonAuth />
//     }
//   </AuthUserContext.Consumer>

  
//making the Navigation component aware of the authenticated user to display different options depending on it
const Navigation = ({ authUser }) => (
  <div> 
    { authUser 
        ? <NavigationAuth /> 
        : <NavigationNonAuth />
    }
  </div>
);

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
