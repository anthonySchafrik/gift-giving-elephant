import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { handleInfo, SIGN_UP_INFO } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignUpInfo = this.handleSignUpInfo.bind(this);
    this.handleUserSignUp = this.handleUserSignUp.bind(this);
  }

  handleSignUpInfo(event) {
    const { id: key, value } = event.target;

    this.props.handleInfo(key, value, SIGN_UP_INFO);
  }

  handleUserSignUp() {
    const { signUpInfo } = this.props;

    if (this.passwordCheck()) {
      axios.post('/createUser', signUpInfo).then(res => {
        alert(res.data);
      });
    } else {
      alert('Passwords did not match');
    }
  }

  passwordCheck() {
    const { password, passwordCheck } = this.props.signUpInfo;
    if (password === passwordCheck) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { handleSignUpInfo, handleUserSignUp } = this;
    return (
      <div className="form-container">
        <label>Username:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="userName"
          maxLength="10"
          placeholder="Max length of 10"
        />
        <label>First Name:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="firstName"
        />
        {/* <label>Last Name:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="lastName"
        />
        <label>Email:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="email"
        /> */}
        <label>Password:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="password"
          id="password"
        />
        <label>Password Check:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="password"
          id="passwordCheck"
        />
        <p style={{ maxWidth: '40%' }}>
          Put in a three ideas to help people know what to get you for exmple
          Doctor Who, World of Warcraft, football team.
        </p>
        <label>Hobby One:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="hobbyOne"
        />
        <label>Hobby two:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text"
          id="hobbyTwo"
        />
        <label>Hobby Three:</label>
        <input
          onChange={handleSignUpInfo}
          className="form-input"
          type="text-field"
          id="hobbyThree"
        />
        <button onClick={handleUserSignUp}>Create User</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { signUpInfo: state.signUpInfo };
};

export default connect(
  mapStateToProps,
  { handleInfo }
)(Signup);
