import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { fetchGroupName, fetchGroupInfo, newGroupInfo } from "../actions";
import CreateGroup from "./CreateGroup";

class EditGroup extends Component {
  constructor(props) {
    super(props);

    this.handleGroupName = this.handleGroupName.bind(this);
    this.handleFetchGroupinfo = this.handleFetchGroupinfo.bind(this);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
    this.handleGroupUpdate = this.handleGroupUpdate.bind(this);
  }

  handleGroupName(event) {
    let name = event.target.value;
    this.props.fetchGroupName(name);
  }

  handleFetchGroupinfo() {
    let name = this.props.getName;
    this.props.fetchGroupInfo(name);
  }

  handleNewGroupOption(event) {
    let id = event.target.id;
    let value = event.target.value;
    this.props.newGroupInfo(id, value);
  }

  handleGroupUpdate() {
    let id = this.props.groupInfo.id;
    let updateGroup = { ...this.props.newGroup, id: id };
    axios.patch("/updateGroup", updateGroup).then(res => {
      alert(res.data);
    });
  }

  render() {
    const { name, password, total, cash } = this.props.groupInfo;
    const { handleNewGroupOption, handleGroupUpdate } = this;
    if (Object.keys(this.props.groupInfo).length === 0) {
      return (
        <div>
          <input onChange={this.handleGroupName} type="text" id="name" />
          <button onClick={this.handleFetchGroupinfo}>click</button>
        </div>
      );
    } else {
      return (
        <div>
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
        </div>
      );
    }
  }
}
//
const mapStateToProps = state => {
  return {
    getName: state.getGroupName.name,
    groupInfo: state.groupInfo,
    newGroup: state.newGroup
  };
};

export default connect(
  mapStateToProps,
  { fetchGroupName, fetchGroupInfo, newGroupInfo }
)(EditGroup);
