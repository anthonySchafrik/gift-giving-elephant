import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchGroupName } from '../actions';
import { generateRandomNumber, groupFilter } from '../utils';

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

  /* 
    pull 2 random user out of the group array
    check to make sure they did not pick the same number
    pull the 2 users out of the group array
    repeate till array is empty
  */

  assignPeople(event, group, match = []) {
    group = group || this.state.groupDetails;

    let one = generateRandomNumber(group.length);
    let two = generateRandomNumber(group.length);

    while (one === two) {
      two = generateRandomNumber(group.length);
    }

    let personOne = { ...group[one] };
    let personTwo = { ...group[two] };

    match.push([personOne, personTwo]);

    group = groupFilter(group, personOne, personTwo);

    if (group.length > 0) {
      return this.assignPeople(event, group, match);
    }
    console.log(match);
  }

  fetchUserGroupInfo() {
    // const { name: group } = this.props.getGroupName;

    this.setState({ isLoading: true });
    let group = [
      { id: 1, firstname: 'a' },
      { id: 2, firstname: 'b' },
      { id: 3, firstname: 'c' },
      { id: 4, firstname: 'd' },
      { id: 5, firstname: 'e' },
      { id: 6, firstname: 'f' }
    ];
    // axios.get(`/userGroupInfo/?group=${group}`).then(res => {
    // this.setState({ groupDetails: res.data });
    this.setState({ groupDetails: group });
    // });
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
          <button onClick={fetchUserGroupInfo}>Search</button>
          {loading()}
        </div>
      );
    } else {
      return (
        <div>
          {userInfo()}
          <button onClick={assignPeople}>Assign People</button>
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
