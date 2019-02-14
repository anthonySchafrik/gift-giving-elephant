import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInfo, JOIN_GROUP_INFO } from '../actions';
import { joinUserGroup } from '../proxies/joinGroup';

class JoinGroup extends Component {
  constructor(props) {
    super(props);

    this.handleJoinGroup = this.handleJoinGroup.bind(this);
    this.handleGroupInfo = this.handleGroupInfo.bind(this);
  }

  handleJoinGroup() {
    const { joinGroupInfo } = this.props;

    joinUserGroup(joinGroupInfo).then(res => {
      alert(res.data);
    });
  }

  handleGroupInfo(event) {
    const { id: key, value } = event.target;

    this.props.handleInfo(key, value, JOIN_GROUP_INFO);
  }

  render() {
    const { handleGroupInfo, handleJoinGroup } = this;

    return (
      <div className="form-container">
        <h3>
          Please enter the Name and password of the group you are trying to
          join.
        </h3>
        <label>Group Name: </label>
        <input onChange={handleGroupInfo} type="text" id="groupName" />
        <label>Group password: </label>
        <input onChange={handleGroupInfo} type="password" id="password" />
        <label>User Name: </label>
        <input onChange={handleGroupInfo} type="text" id="userName" />
        <button
          style={{ marginTop: '1em' }}
          className="displayButtons"
          onClick={handleJoinGroup}
        >
          Join Group
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { joinGroupInfo } = state;
  return { joinGroupInfo };
};

export default connect(
  mapStateToProps,
  { handleInfo }
)(JoinGroup);
