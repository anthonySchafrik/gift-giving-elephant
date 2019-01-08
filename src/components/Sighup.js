import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { newUserInfo } from "../actions";

class Sighup extends Component {
  constructor(props) {
    super(props);
    this.handleSighUpInfo = this.handleSighUpInfo.bind(this);
    this.handleUserSighUp = this.handleUserSighUp.bind(this);
  }

  handleSighUpInfo(event) {
    const { id: key, value } = event.target;
    this.props.newUserInfo(key, value);
  }

  handleUserSighUp() {
    const { sighUpInfo } = this.props;
    if (this.passwordCheck()) {
      axios.post("/createUser", sighUpInfo).then(res => {
        alert(res.data);
      });
    } else {
      alert("Passwords did not match");
    }
  }

  passwordCheck() {
    const { password, passwordCheck } = this.props.sighUpInfo;
    if (password === passwordCheck) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { handleSighUpInfo, handleUserSighUp } = this;
    return (
      <div className="sigh-up-container">
        <label>Username:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="userName"
          maxLength="10"
          placeholder="Max length of 10"
        />
        <label>First Name:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="firstName"
        />
        <label>Last Name:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="lastName"
        />
        <label>Email:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="email"
        />
        <label>Password:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="password"
          id="password"
        />
        <label>Password Check:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="password"
          id="passwordCheck"
        />
        <p style={{ maxWidth: "40%" }}>
          Put in a three ideas to help people know what to get you for exmple
          Doctor Who, World of Warcraft, football team.
        </p>
        <label>Hobby One:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="hobbyOne"
        />
        <label>Hobby two:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text"
          id="hobbyTwo"
        />
        <label>Hobby Three:</label>
        <input
          onChange={handleSighUpInfo}
          className="sigh-up-input"
          type="text-field"
          id="hobbyThree"
        />
        <button onClick={handleUserSighUp}>Create User</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sighUpInfo: state.sighUpInfo };
};

export default connect(
  mapStateToProps,
  { newUserInfo }
)(Sighup);
