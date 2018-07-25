import React from 'react';

//The following content below will create the context object by using React’s 
//context API. You have access to the API by using the createContext() function. You can 
//pass an initial value argument to the function, but since the authenticated user should
// be null in the beginning, passing null to it is just fine.

const AuthUserContext = React.createContext(null);

export default AuthUserContext;