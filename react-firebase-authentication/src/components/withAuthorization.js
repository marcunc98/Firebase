import React from "react";
import { withRouter } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import { firebase } from "../firebase";
import * as routes from "../constants/routes";

// THIS FILE: Similar to the higher order withAuthentication component, there will be a higher
// order withAuthorization component to shield away from the logic. It is not used
//on the App component, but can be used on all components which are associated with
//a route in the App component. Thus it can be reused for the HomePage and AccountPage
//components. What’s the task of the higher order component? First of all, it gets the
//condition passed as configurational parameter. That way, you can decide on your own
//if it should be a general or specific authorization rule. Second, it has to decide
//based on the condition whether it should redirect to a public page because the user
//isn’t authorized to view the current page.

//COMPONENTDIDMOUNT: Using the Firebase listener to trigger a callback function in case
//the authenticated user object changes.Every time the authUser changes, it checks the
//passed authCondition() function with the authUser. If the authorization fails, the higher
// order component redirects to the sign in page. If it doesn’t fail, the higher order component
// does nothing. In order to be able to redirect, the higher order component has access to the
//history object of the Router by using the in-house withRouter() higher order component from the
//React Router library.

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    // RENDER METHOD:  It renders either the passed component (e.g. HomePage, AccountPage) or nothing.
    // That’s just a fallback in case there is no authenticated user passed by the Consumer component
    //from React’s context object. It increases the protection of the component by rendering simply nothing.

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(WithAuthorization);
};

export default withAuthorization;
