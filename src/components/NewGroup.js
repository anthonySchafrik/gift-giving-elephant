import React, { Component } from "react";

export default class NewGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupOptions: "",
      newGroup: {
        groupName: "",
        groupPass: "",
        groupPassCheck: "",
        totalPeople: 0,
        totalCashAmount: 0
      }
    };
    this.whichGroupToRender = this.whichGroupToRender.bind(this);
    this.handleGroupState = this.handleGroupState.bind(this);
  }

  handleGroupState(event) {
    this.setState({ groupOptions: event.target.value });
  }

  whichGroupToRender() {
    const { groupOptions } = this.state;

    if (groupOptions === "makeNewGroup") {
      return (
        <div>
          <label>Group Name:</label>
          <input id="groupName" type="text" />
          <label>Group Password:</label>
          <input id="groupPass" type="password" />
          <label>Group Password Check:</label>
          <input id="groupPassCheck" type="password" />
          <label>How many People?:</label>
          <input id="totalPeople" type="number" />
          <label>Total Cash Amount</label>
          <input id="totalCashAmount" type="number" />
        </div>
      );
    }
    if (groupOptions === "editGroup") {
      return <div>edit group switch statment works</div>;
    }
  }

  render() {
    const { whichGroupToRender, handleGroupState } = this;

    return (
      <div>
        <h3>Click button for options you are looking for.</h3>
        <button onClick={handleGroupState} value="makeNewGroup">
          Make New Group
        </button>
        <button onClick={handleGroupState} value="editGroup">
          Edit Group
        </button>
        {whichGroupToRender()}
        <div />
      </div>
    );
  }
}
