import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { handleInfo, LOG_IN_INFO } from "../actions";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSuccessfullLogIn = this.handleSuccessfullLogIn.bind(this);
    this.LogInSubmit = this.LogInSubmit.bind(this);
  }

  handleLogIn(event) {
    const { id: key, value } = event.target;
    this.props.handleInfo(key, value, LOG_IN_INFO);
  }

  handleSuccessfullLogIn(key, value) {
    this.props.handleInfo(key, value, LOG_IN_INFO);
  }

  LogInSubmit() {
    const { username, password } = this.props.logInInfo;
    axios
      .get(`/logUserIn`, {
        params: {
          username,
          password
        }
      })
      .then(res => {
        if (res.data === true) {
          this.handleSuccessfullLogIn("logedIn", true);
        } else {
          alert(res.data);
        }
      });
  }

  render() {
    const { logedIn } = this.props.logInInfo;
    const { handleLogIn, LogInSubmit } = this;

    if (logedIn) {
      return (
        <div>
          <p>
            If you would like to make a new group, click New Group from the drop
            down. If you are looking for your group or group info, click on My
            Group.
          </p>
          <Link to="/Group">
            <button>Group</button>
          </Link>
          <div>
            <h3>What is the Gift Giving Elephant?</h3>
            <p>
              The idea behind the Elephant is to have everyone put their name
              into a bowl. Then one by one, names are picked from the bowl.
              Everyone is given a set dollar amount they are allowed to spend on
              the person they picked. Each person gives 3 ideas to help someone
              pick out a gift for you.
            </p>
            <p>
              There is an option that can be set up by your group admin called
              "Who Can Math"; whoever can get the closest to spending the total
              give amount will be given a prize!
            </p>
          </div>
          <h3>Rules To The Game</h3>
          <ol>
            <li>You cannot go over the amount given.</li>
            <li>
              You cannot tell anyone who you picked until after all gifts are
              passed out and opened.
            </li>
            <li>
              You may trade gifts with anyone other than who you picked unless
              that person asks you to trade.
            </li>
            <li>All gifts must show up to the event wrapped.</li>
            <li>Last but not least - everyone have fun!</li>
          </ol>
          <img
            src="../css/images/GGELogo.png"
            alt="Site Logo"
            width="700"
            height="500"
          />
        </div>
      );
    } else {
      return (
        <div>
          <label>Username</label>
          <input onChange={handleLogIn} type="text" id="username" />
          <label>Password</label>
          <input onChange={handleLogIn} type="password" id="password" />
          <button onClick={LogInSubmit}>Log in</button>
          <Link to="/SignUp">
            <button>Sign up</button>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { logInInfo: state.logInInfo };
};

export default connect(
  mapStateToProps,
  { handleInfo }
)(HomePage);
