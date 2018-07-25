//Implementing the higher order component 


import React from 'react';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';

//Framework around the higher order component which will handle the sessions logic (i.e. the apps state of being
// of being either authenticated or not).
const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }


// For this code snippet below, it is important to know that this Provider component can make 
// its value accessible to all the components below. So if you would pass the App component 
// this higher order component, then the App component and all components below of it would 
// have access to the VALUE. Since the VALUE is the AUTHENTICATED USER or NULL, all components
// below can act accordingly to it.
    render() {
      const { authUser } = this.state;
      
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;