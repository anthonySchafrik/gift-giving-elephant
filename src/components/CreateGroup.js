import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { newGroupInfo } from "../actions";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
    this.handleCreateNewGroup = this.handleCreateNewGroup.bind(this);
  }

  handleNewGroupOption(event) {
    let id = event.target.id;
    let value = event.target.value;
    this.props.newGroupInfo(id, value);
  }

  passwordCheck() {
    const { groupPass, groupPassCheck } = this.props.newGroup;
    if (groupPass === groupPassCheck) {
      return true;
    } else {
      return false;
    }
  }

  handleCreateNewGroup() {
    const { newGroup } = this.props;

    if (this.passwordCheck()) {
      axios.post("/newGroup", newGroup).then(res => {
        alert(res.data);
      });
    } else {
      alert("Password did not match");
    }
  }

  render() {
    const { handleNewGroupOption, handleCreateNewGroup } = this;
    return (
      <div>
        <label>Group Name:</label>
        <input
          onChange={handleNewGroupOption}
          id="groupName"
          type="text"
          placeHolder={this.props.newGroup.groupName}
        />
        <div />
        <label>Group Password:</label>
        <input onChange={handleNewGroupOption} id="groupPass" type="password" />
        <div />
        <label>Group Password Check:</label>
        <input
          onChange={handleNewGroupOption}
          id="groupPassCheck"
          type="password"
        />
        <div />
        <label>Total Cash Amount</label>
        <input
          onChange={handleNewGroupOption}
          id="totalCashAmount"
          type="number"
        />
        <div />
        <label>How many People?:</label>
        <input onChange={handleNewGroupOption} id="totalPeople" type="number" />
        <div />
        <button onClick={handleCreateNewGroup}>Crate New Group</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { newGroup: state.newGroup };
};

export default connect(
  mapStateToProps,
  { newGroupInfo }
)(CreateGroup);
