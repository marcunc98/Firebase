import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth, db } from "../firebase";

// import { auth, db } from '../firebase';
import * as routes from "../constants/routes";

const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>
);

//initialize the state of the component that captures the user information
//error state to capture an error object in case of the sign up request to
//the Firebase API fails. The state is initialized by an object destructuring.
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

//**REMEMBER This is a stateful component and will require a state */
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  //render () - implement all the input fields to capture the
  //information in the render method of the component
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    //How the sign up info is being displayed and captured. Each input field gets a value
    //from the local state and updates the value in the local state with a onChange handler
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        {/* setState() method: It is a higher order function which takes a key value and the actual value 
that is typed into the input field. In the byPropKey() function, the key value is used as dynamic key 
to allocate the actual value in the local state object. */}

        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
        {/* may want to alert error message thru 'conditional rendering'(reacts if/else) 
        "The email address is aready in use by another user" */}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
