import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {}, updateUser: {} };

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.submitUpedatedUser = this.submitUpedatedUser.bind(this);
  }
  componentDidMount() {
    const { logedIn, username } = this.props.logInInfo;

    if (logedIn) {
      axios.get(`userInfo/?user=${username}`).then(res => {
        this.setState({ userInfo: res.data[0] });
      });
    }
  }

  handleUserUpdate(event) {
    const { id: key, value } = event.target;
    const { updateUser } = this.state;

    this.setState({
      updateUser: {
        ...updateUser,
        [key]: value
      }
    });
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
    const { updateUser } = this.state;
    const {
      id,
      firstname,
      lastname,
      email,
      password,
      hobbyone,
      hobbytwo,
      hobbythree
    } = this.state.userInfo;

    let newPassword = updateUser.password || password;
    let passCheck = updateUser.passCheck || password;

    let updatedUser = {
      id,
      password: updateUser.password || password,
      firstname: updateUser.firstname || firstname,
      lastname: updateUser.lastname || lastname,
      email: updateUser.email || email,
      password: updateUser.password || password,
      hobbyone: updateUser.hobbyone || hobbyone,
      hobbytwo: updateUser.hobbytwo || hobbytwo,
      hobbythree: updateUser.hobbythree || hobbythree
    };

    if (passwordCheck(newPassword, passCheck)) {
      axios.patch("/updateUser", updatedUser).then(res => {
        alert(res.data);
      });
    } else {
      alert("Passwords did not match");
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
    } = this.state.userInfo;
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
          <label>Last Name</label>
          <input
            onChange={handleUserUpdate}
            placeholder={lastname}
            id="lastname"
          />
          <label>Email</label>
          <input onChange={handleUserUpdate} placeholder={email} id="email" />
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
          <button onClick={submitUpedatedUser}>Update User</button>
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
