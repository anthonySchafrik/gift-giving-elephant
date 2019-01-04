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
    console.log(this.props);
    return (
      <div>
        <input onChange={this.handleGroupName} type="text" id="name" />
        <button onClick={this.getGroupTest}>click</button>
      </div>
    );
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
