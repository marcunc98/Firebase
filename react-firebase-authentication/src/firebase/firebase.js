//firebase.js: The file where all the configuration goes that you have seen previously on your Firebase dashboard. 
//In addition, Firebase itself will be instantiated in this file.

import firebase from 'firebase/app'; //importing the firebase object from the firebase node package
import 'firebase/auth';  //part of the Firebase API which will be used in the src/firebase/auth.js file and thus needs to be exported
// import 'firebase/database';


  // Initialize PRODUCTION Firebase config
  //You can read up on all functionalities that are exposed by the API in the official Firebase documentation.
  const prodConfig = {
    apiKey: "AIzaSyBl22nfOJx3NszgrvMYrlwobplCS0Geb-0", 
    authDomain: "reactfirebase-authentication.firebaseapp.com",
    databaseURL: "https://reactfirebase-authentication.firebaseio.com",
    projectId: "reactfirebase-authentication",
    storageBucket: "reactfirebase-authentication.appspot.com",
    messagingSenderId: "484983790088"
  };

  const devConfig = {
    apiKey: "AIzaSyBl22nfOJx3NszgrvMYrlwobplCS0Geb-0",
    authDomain: "reactfirebase-authentication.firebaseapp.com",
    databaseURL: "https://reactfirebase-authentication.firebaseio.com",
    projectId: "reactfirebase-authentication",
    storageBucket: "reactfirebase-authentication.appspot.com",
    messagingSenderId: "484983790088"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  // const db = firebase.database();
  const auth = firebase.auth();


  //Firebase separates its authentication and database API
  export {  
      auth
  };

  
//The above devConfig and prodConfig are optional. On the Firebase website, you could create a second project.
// Afterward, your first project could be used as your development database and your second project 
//as your production database. That way, you never mix up your data from development mode with your 
//data from your deployed application (production mode).