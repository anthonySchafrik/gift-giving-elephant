import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
  }
  componentDidMount() {
    const { logedIn, username } = this.props.logInInfo;

    if (logedIn) {
      axios.get(`userInfo/?user=${username}`).then(res => {
        this.setState({ userInfo: res.data[0] });
      });
    }
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      hobbyone,
      hobbytwo,
      hobbythree
    } = this.state.userInfo;

    const { logedIn } = this.props.logInInfo;

    if (logedIn) {
      return (
        <div>
          <h3>User setting</h3>
          <label>Fist Name</label>
          <input placeholder={firstname} />
          <label>Last Name</label>
          <input placeholder={lastname} />
          <label>Email</label>
          <input placeholder={email} />
          <label>Password</label>
          <input placeholder={password} />
          <label>Password Check</label>
          <input placeholder={password} />
          <label>Hobby One</label>
          <input placeholder={hobbyone} />
          <label>Hobby Two</label>
          <input placeholder={hobbytwo} />
          <label>Hobby Three</label>
          <input placeholder={hobbythree} />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Log in to get account setting</h3>
          <Link to="/home">
            <button>login</button>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { logInInfo } = state;
  return { logInInfo };
};

export default connect(mapStateToProps)(AccountSetting);
