import { db } from './firebase'; //importing a database object

//THIS FILE: Creating a Firebase realtime database to keep track of the user entities. This will
//allow you to associate other domain entities (e.g. a todo item) created by your users to your users.
//Ultimately this will create an API and store users in a realtime database in Firebase during the sign up process.



//1st FUNCTION (doCreateUser) -  Creates a User

//In this first asynchronous function, the user is created as an object with the username and email properties.
// Furthermore, it is stored on the users/${id} resource path. So whenever you would want to retrieve a specific 
//user from the Firebase database, you could get the one user via its unique identifier and the entity resource path.
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });


//2nd FUNCTION(onceGetUsers) -  Retreives all users

//In this second asynchronous function, the users are retrieved from the general user’s entity resource path. 
//The function will return all users from the Firebase realtime database.

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...