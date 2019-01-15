import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUserInfo } from "../actions";

class AccountSetting extends Component {
  componentDidMount() {
    const { logedIn, username } = this.props.logInInfo;

    if (logedIn) {
      this.props.fetchUserInfo(username, this.props);
    }
  }

  render() {
    console.log(this.props.logInInfo, "inside accountsetting");
    // const {
    //   fistname,
    //   lastname,
    //   email,
    //   password,
    //   hobbyone,
    //   hobbytwo,
    //   hobbythree
    // } = this.props.userInfo;

    const { logedIn } = this.props.logInInfo;

    if (logedIn) {
      return (
        <div>
          <h3>something</h3>
          {/* <label>{fistname}</label>
          <label>{lastname}</label>
          <label>{email}</label>
          <label>{password}</label>
          <label>{hobbyone}</label>
          <label>{hobbytwo}</label>
          <label>{hobbythree}</label> */}
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
  const { logInInfo, userInfo } = state;
  return { logInInfo, userInfo };
};

export default connect(
  mapStateToProps,
  { fetchUserInfo }
)(AccountSetting);
