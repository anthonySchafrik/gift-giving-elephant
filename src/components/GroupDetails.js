import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchGroupName } from '../actions';

class GroupDetails extends Component {
  constructor(props) {
    super(props);

    this.handleGroupName = this.handleGroupName.bind(this);
    this.fetchUserGroupInfo = this.fetchUserGroupInfo.bind(this);
  }
  handleGroupName(event) {
    const { value: name } = event.target;

    this.props.fetchGroupName(name);
  }

  fetchUserGroupInfo() {
    const { name: group } = this.props.getGroupName;

    axios.get(`/userGroupInfo/?group=${group}`).then(res => {
      console.log(res);
    });
  }

  render() {
    const { handleGroupName, fetchUserGroupInfo } = this;
    return (
      <div>
        <p>
          To see how many people have joined your group and there names type in
          group name below.
        </p>
        <input
          onChange={handleGroupName}
          type="text"
          placeholder="Group Name"
        />
        <button onClick={fetchUserGroupInfo}>Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { getGroupName } = state;
  return { getGroupName };
};

export default connect(
  mapStateToProps,
  { fetchGroupName }
)(GroupDetails);
