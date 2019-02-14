import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGroupName } from '../actions';
import { generateRandomNumber, groupFilter } from '../utils';
import { fetchUserGroup } from '../proxies/userGroupInfo';

class GroupDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupDetails: [],
      isLoading: false
    };

    this.assignPeople = this.assignPeople.bind(this);
    this.fetchUserGroupInfo = this.fetchUserGroupInfo.bind(this);
    this.handleGroupName = this.handleGroupName.bind(this);
    this.loading = this.loading.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  assignPeople() {
    const { groupDetails: group } = this.state;

    axios.post('/matchedUsers', group).then(res => {
      alert(res.data);
    });
  }

  fetchUserGroupInfo() {
    const { name: group } = this.props.getGroupName;

    this.setState({ isLoading: true });

    fetchUserGroup(group).then(res => {
      this.setState({ groupDetails: res.data });
    });
  }

  handleGroupName(event) {
    const { value: name } = event.target;

    this.props.fetchGroupName(name);
  }

  loading() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <h4>Getting Details a few moments Loading...</h4>;
    }
  }

  render() {
    const {
      assignPeople,
      fetchUserGroupInfo,
      handleGroupName,
      loading,
      userInfo
    } = this;
    const { groupDetails } = this.state;

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
          <button
            style={{ marginLeft: '1em' }}
            className="displayButtons"
            onClick={fetchUserGroupInfo}
          >
            Search
          </button>
          {loading()}
        </div>
      );
    } else {
      return (
        <div>
          {userInfo()}
          <button
            style={{ marginTop: '1em' }}
            className="displayButtons"
            onClick={assignPeople}
          >
            Assign People
          </button>
        </div>
      );
    }
  }

  userInfo() {
    const { groupDetails } = this.state;

    return groupDetails.map(user => {
      return <p key={user.id}>{user.firstname}</p>;
    });
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
