// import { db } from './firebase'; //importing a database object

// // User API


// //In this first asynchronous function, the user is created as an object with the username and email properties.
// // Furthermore, it is stored on the users/${id} resource path. So whenever you would want to retrieve a specific 
// //user from the Firebase database, you could get the one user via its unique identifier and the entity resource path.
// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//   });


// //In this second asynchronous function, the users are retrieved from the general user’s entity resource path. 
// //The function will return all users from the Firebase realtime database.

// export const onceGetUsers = () =>
//   db.ref('users').once('value');

// // Other Entity APIs ...