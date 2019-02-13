import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { handleInfo, LOG_IN_INFO } from '../actions';
import { login } from '../proxies/login';

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

    login({ username, password })
      // axios
      //   .get(`/logUserIn`, {
      //     params: {
      //       username,
      //       password
      //     }
      //   })
      .then(res => {
        if (res.data === true) {
          this.handleSuccessfullLogIn('logedIn', true);
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
          <p className="center">
            If you would like to make a new group or check any info with them
            click "Group". "Assigned Person" will show you who you were assigned
            to and their gift ideas.
          </p>
          <div className="center centerButtons">
            <Link to="/Group">
              <button stlye={{ margin: '3%' }} className="displayButtons">
                Group
              </button>
            </Link>
            <Link to="/Assigned">
              <button className="displayButtons">Assigned Person</button>
            </Link>
          </div>
          <h1 className="title">Gift-Giving Elephant</h1>
          <div className="form-container">
            <img
              style={{ marginTop: '-5%' }}
              src="../css/images/logo.png"
              alt="Site Logo"
            />
            <div className="containerBoxes">
              <div className="boxes">
                <h3>What is the Gift-Giving Elephant?</h3>
                <hr />
                <p>
                  The idea behind the Elephant is to have everyone put their
                  name into a bowl. Then one by one, names are picked from the
                  bowl. Everyone is given a set dollar amount they are allowed
                  to spend on the person they picked. Each person gives 3 ideas
                  to help someone pick out a gift for you.
                </p>
                <p>
                  There is an option that can be set up by your group admin
                  called "Who Can Math"; whoever can get the closest to spending
                  the total give amount will be given a prize!
                </p>
              </div>

              <div className="boxes">
                <h3>Rules To The Game:</h3>
                <hr />
                <ol style={{ textAlign: 'left' }}>
                  <li>You cannot go over the amount given.</li>
                  <li>
                    You cannot tell anyone who you picked until after all gifts
                    are passed out and opened.
                  </li>
                  <li>
                    You may trade gifts with anyone other than who you picked
                    unless that person asks you to trade.
                  </li>
                  <li>All gifts must show up to the event wrapped.</li>
                  <li>Last but not least - everyone have fun!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-container">
          <h1 className="logInTitle">Gift-Giving</h1>
          <h1 style={{ marginTop: '-15%' }} className="logInTitle">
            Elephant
          </h1>
          <div className="logIn">
            <label className="font">Username</label>
            <input onChange={handleLogIn} type="text" id="username" />
            <div style={{ margin: 15 }} />
            <label className="font">Password</label>
            <input onChange={handleLogIn} type="password" id="password" />

            <button
              className="displayButtons"
              style={{
                width: 85,
                height: 50,
                marginLeft: '25%',
                marginBottom: 5,
                marginTop: 10
              }}
              onClick={LogInSubmit}
            >
              Log In
            </button>

            <Link to="/SignUp">
              <button style={{ marginLeft: '25%' }} className="displayButtons">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { logInInfo } = state;
  return { logInInfo };
};

export default connect(
  mapStateToProps,
  { handleInfo }
)(HomePage);
