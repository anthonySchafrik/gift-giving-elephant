import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  fetchGroupName,
  fetchGroupInfo,
  handleInfo,
  NEW_GROUP_INFO
} from '../actions';

class EditGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGroupInfo: false
    };

    this.handleFetchGroupinfo = this.handleFetchGroupinfo.bind(this);
    this.handleGroupName = this.handleGroupName.bind(this);
    this.handleGroupUpdate = this.handleGroupUpdate.bind(this);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
    this.toggleShowGroupInfo = this.toggleShowGroupInfo.bind(this);
  }

  handleFetchGroupinfo() {
    let name = this.props.getName;
    this.props.fetchGroupInfo(name);
    this.toggleShowGroupInfo();
  }

  handleGroupName(event) {
    let name = event.target.value;
    this.props.fetchGroupName(name);
  }

  handleGroupUpdate() {
    const { id, name, password, cash, total } = this.props.groupInfo;
    const {
      groupName,
      groupPass,
      totalCashAmount,
      totalPeople
    } = this.props.updateGroup;

    let updateGroup = {
      id: id,
      groupName: groupName || name,
      groupPass: groupPass || password,
      totalCashAmount: totalCashAmount || cash,
      totalPeople: total || totalPeople
    };

    axios.patch('/updateGroup', updateGroup).then(res => {
      alert(res.data);
    });
  }

  handleNewGroupOption(event) {
    const { id: key, value } = event.target;
    this.props.handleInfo(key, value, NEW_GROUP_INFO);
  }

  toggleShowGroupInfo() {
    const { showGroupInfo } = this.state;
    this.setState({ showGroupInfo: !showGroupInfo });
  }

  render() {
    const { name, password, total, cash } = this.props.groupInfo;
    const {
      handleGroupName,
      handleFetchGroupinfo,
      handleNewGroupOption,
      handleGroupUpdate,
      toggleShowGroupInfo
    } = this;
    const { showGroupInfo } = this.state;
    if (!showGroupInfo) {
      return (
        <div>
          <h3>Enter name of Group you wish to edit.</h3>
          <input onChange={handleGroupName} type="text" id="name" />
          <button onClick={handleFetchGroupinfo}>click</button>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <label>Group Name</label>
          <input
            id="groupName"
            onChange={handleNewGroupOption}
            type="text"
            placeholder={name}
          />
          <br />
          <label>Group password</label>
          <input
            id="groupPass"
            onChange={handleNewGroupOption}
            type="text"
            placeholder={password}
          />
          <br />
          <label>Total amount of people</label>
          <input
            id="totalPeople"
            onChange={handleNewGroupOption}
            type="number"
            placeholder={total}
          />
          <br />
          <label>Cash perperson</label>
          <input
            id="totalCashAmount"
            onChange={handleNewGroupOption}
            type="number"
            placeholder={cash}
          />
          <br />
          <button onClick={handleGroupUpdate}>Update Group</button>
          <button onClick={toggleShowGroupInfo}>Clear Search</button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    getName: state.getGroupName.name,
    groupInfo: state.groupInfo,
    updateGroup: state.group
  };
};

export default connect(
  mapStateToProps,
  { fetchGroupName, fetchGroupInfo, handleInfo }
)(EditGroup);
