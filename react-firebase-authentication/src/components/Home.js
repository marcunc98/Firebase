// THIS FILE: using the higher order component to protect your routes (e.g. /home and /account)
// with authorization rules.

//**TEST only to verify that the user creation is working, you can retrieve all the users from the database.
//The componentDidMount() lifecycle method is the perfect place to fetch users from your database API.

import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);



// import React from 'react';

// import withAuthorization from './withAuthorization';

// const HomePage = () =>
//   <div>
//     <h1>Home Page</h1>
//     <p>The Home Page is accessible by every signed in user.</p>
//   </div>

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(HomePage);

