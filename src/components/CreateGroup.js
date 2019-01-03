import React, { Component } from "react";
import { connect } from "react-redux";

import { newGroupInfo } from "../actions";

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
  }

  passwordCheck() {
    const { groupPass, groupPassCheck } = this.state;

    if (groupPass === groupPassCheck) {
      return true;
    } else {
      return false;
    }
  }

  handleNewGroupOption(event) {
    let id = event.target.id;
    let value = event.target.value;
    this.props.newGroupInfo(id, value);
  }

  render() {
    const { handleNewGroupOption } = this;
    console.log(this.props.newGroup);
    return (
      <div>
        <label>Group Name:</label>
        <input onChange={handleNewGroupOption} id="groupName" type="text" />
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
        <button
          onClick={() => {
            console.log("i was clicked");
          }}
        >
          Crate New Group
        </button>
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
