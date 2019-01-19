import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { fetchGroupName } from "../actions";

class GroupDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupDetails: [],
      isLoading: false
    };

    this.handleGroupName = this.handleGroupName.bind(this);
    this.fetchUserGroupInfo = this.fetchUserGroupInfo.bind(this);
    this.loading = this.loading.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  handleGroupName(event) {
    const { value: name } = event.target;

    this.props.fetchGroupName(name);
  }

  fetchUserGroupInfo() {
    const { name: group } = this.props.getGroupName;

    this.setState({ isLoading: true });

    axios.get(`/userGroupInfo/?group=${group}`).then(res => {
      this.setState({ groupDetails: res.data });
    });
  }

  loading() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <h4>Loading...</h4>;
    }
  }

  userInfo() {
    const { groupDetails } = this.state;

    return groupDetails.map(user => {
      return <p>{user.firstname}</p>;
    });
  }

  render() {
    const { handleGroupName, fetchUserGroupInfo, loading, userInfo } = this;
    const { groupDetails } = this.state;
    console.log(groupDetails);
    if (!groupDetails.length) {
      return (
        <div>
          <p>
            To see how many people have joined your group and there names type
            in group name below.
          </p>
          <input
            onChange={handleGroupName}
            type="text"
            placeholder="Group Name"
          />
          <button onClick={fetchUserGroupInfo}>Search</button>
          {loading()}
        </div>
      );
    } else {
      return <div>{userInfo()}</div>;
    }
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
