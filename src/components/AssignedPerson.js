import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserInfo } from '../actions';
import { fetchMatch } from '../proxies/fetchMatch';

class AssignedPerson extends Component {
  constructor(props) {
    super(props);

    this.state = { match: {} };
  }

  componentDidMount() {
    const { username } = this.props.logInInfo;
    if (username !== '') {
      this.props.fetchUserInfo(username).then(() => {
        let userId = this.props.userInfo.id;
        fetchMatch(userId).then(res => {
          this.setState({ match: res.data });
        });
      });
    }
  }

  render() {
    const { username } = this.props.logInInfo;
    const {
      firstname,
      hobbyone,
      hobbytwo,
      hobbythree,
      match
    } = this.state.match;

    if (username === '') {
      return <h3>Log In to get your match</h3>;
    }
    if (match) {
      return <h3>User is not matched yet.</h3>;
    }
    if (firstname) {
      return (
        <div>
          <p>You were assigned {firstname}</p>
          <p>There 3 hobby clues are as follows</p>
          <ul>
            <li>{hobbyone}</li>
            <li>{hobbytwo}</li>
            <li>{hobbythree}</li>
          </ul>
        </div>
      );
    } else {
      return <h1>Getting your assigned person loading 1 moment.</h1>;
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
)(AssignedPerson);
