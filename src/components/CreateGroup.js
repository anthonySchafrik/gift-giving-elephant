import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { newGroupInfo } from "../actions";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNewGroup = this.handleCreateNewGroup.bind(this);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
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

  handleNewGroupOption(event) {
    const { id: key, value } = event.target;
    this.props.newGroupInfo(key, value);
  }

  passwordCheck() {
    const { groupPass, groupPassCheck } = this.props.newGroup;
    if (groupPass === groupPassCheck) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { handleNewGroupOption, handleCreateNewGroup } = this;
    return (
      <div>
        <label>Group Name:</label>
        <input onChange={handleNewGroupOption} id="groupName" type="text" />
        <br />
        <label>Group Password:</label>
        <input onChange={handleNewGroupOption} id="groupPass" type="password" />
        <br />
        <label>Group Password Check:</label>
        <input
          onChange={handleNewGroupOption}
          id="groupPassCheck"
          type="password"
        />
        <br />
        <label>Total Cash Amount</label>
        <input
          onChange={handleNewGroupOption}
          id="totalCashAmount"
          type="number"
        />
        <br />
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
