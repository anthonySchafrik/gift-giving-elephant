import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserInfo, handleInfo, UPDATE_USER_INFO } from '../actions';
import { updateUser } from '../proxies/updateUser';

class AccountSetting extends Component {
  constructor(props) {
    super(props);

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.submitUpedatedUser = this.submitUpedatedUser.bind(this);
  }
  componentDidMount() {
    const { logedIn, username } = this.props.logInInfo;

    if (logedIn) {
      this.props.fetchUserInfo(username);
    }
  }

  handleUserUpdate(event) {
    const { id: key, value } = event.target;
    this.props.handleInfo(key, value, UPDATE_USER_INFO);
  }

  passwordCheck(pass, passCheck) {
    if (pass === passCheck) {
      return true;
    } else {
      return false;
    }
  }

  submitUpedatedUser() {
    const { passwordCheck } = this;
    const { userInfo } = this.props;
    const { password } = userInfo;

    let passCheck = userInfo.passCheck || password;

    if (passwordCheck(password, passCheck)) {
      updateUser(userInfo).then(res => {
        alert(res.data);
      });
    } else {
      alert('Passwords did not match');
    }
  }

  render() {
    const { handleUserUpdate, submitUpedatedUser } = this;
    const {
      firstname,
      lastname,
      email,
      password,
      hobbyone,
      hobbytwo,
      hobbythree
    } = this.props.userInfo;
    const { logedIn } = this.props.logInInfo;

    if (logedIn) {
      return (
        <div className="form-container">
          <h3>User setting</h3>
          <label>Fist Name</label>
          <input
            onChange={handleUserUpdate}
            placeholder={firstname}
            id="firstname"
          />
          {/* <label>Last Name</label>
          <input
            onChange={handleUserUpdate}
            placeholder={lastname}
            id="lastname"
          />
          <label>Email</label>
          <input onChange={handleUserUpdate} placeholder={email} id="email" /> */}
          <label>Password</label>
          <input
            onChange={handleUserUpdate}
            placeholder={password}
            id="password"
          />
          <label>Password Check</label>
          <input onChange={handleUserUpdate} id="passCheck" />
          <label>Hobby One</label>
          <input
            onChange={handleUserUpdate}
            placeholder={hobbyone}
            id="hobbyone"
          />
          <label>Hobby Two</label>
          <input
            onChange={handleUserUpdate}
            placeholder={hobbytwo}
            id="hobbytwo"
          />
          <label>Hobby Three</label>
          <input
            onChange={handleUserUpdate}
            placeholder={hobbythree}
            id="hobbythree"
          />
          <button
            style={{ marginTop: '1em' }}
            className="displayButtons"
            onClick={submitUpedatedUser}
          >
            Update User
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Log in to get account setting</h3>
          <Link to="/home">
            <button className="displayButtons">login</button>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { logInInfo, userInfo } = state;
  return { logInInfo, userInfo };
};

export default connect(
  mapStateToProps,
  { fetchUserInfo, handleInfo }
)(AccountSetting);
