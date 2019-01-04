import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { fetchGroupName, fetchGroupInfo } from "../actions";

class EditGroup extends Component {
  constructor(props) {
    super(props);

    this.handleGroupName = this.handleGroupName.bind(this);
    this.getGroupTest = this.getGroupTest.bind(this);
  }

  handleGroupName(event) {
    let name = event.target.value;
    this.props.fetchGroupName(name);
  }

  getGroupTest() {
    let name = this.props.getName;
    console.log(name);
    this.props.fetchGroupInfo(name);
  }

  render() {
    const { name, password, total, cash } = this.props.groupInfo;
    console.log(this.props.groupInfo);
    if (Object.keys(this.props.groupInfo).length === 0) {
      return (
        <div>
          <input onChange={this.handleGroupName} type="text" id="name" />
          <button onClick={this.getGroupTest}>click</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Group Name {name}</p>
          <p>Group Password {password}</p>
          <p>Total amount of people {total}</p>
          <p>Total cash perperson {cash}</p>
        </div>
      );
    }
  }
}
//
const mapStateToProps = state => {
  return { getName: state.getGroupName.name, groupInfo: state.groupInfo };
};

export default connect(
  mapStateToProps,
  { fetchGroupName, fetchGroupInfo }
)(EditGroup);
