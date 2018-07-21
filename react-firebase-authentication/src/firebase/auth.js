import { auth } from "./firebase"; //importing const auth = firebase.auth(); firebase importing a node module

//auth.js: The file where the Firebase authentication API will be defined
//to sign up, sign in, sign out etc. a user in your application.
//It is the interface between the official Firebase API and your React application

// Sign Up:
// takes email and password parameters in its function signature and uses an
//official Firebase endpoint from the firebase object to create a user.
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In: same as above
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out:
//You don’t need to pass any argument to it, because the auth object
//itself knows about the currently authenticated user (if a user is authenticated in the first place).

export const doSignOut = () => auth.signOut();

// ** OPTINAL FUNCTIONALITY //**

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
