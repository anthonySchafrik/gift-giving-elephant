import React, { Component } from "react";
import axios from "axios";

export default class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupOptions: "",
      groupName: "",
      groupPass: "",
      totalPeople: "",
      totalCashAmount: ""
    };
    this.whichGroupToRender = this.whichGroupToRender.bind(this);
    this.handleGroupState = this.handleGroupState.bind(this);
    this.handleCreateGroup = this.handleCreateGroup.bind(this);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
  }

  handleGroupState(event) {
    this.setState({ groupOptions: event.target.value });
  }

  handleCreateGroup() {
    const { groupName, groupPass, totalPeople, totalCashAmount } = this.state;

    let newGroup = {
      groupName,
      groupPass,
      totalCashAmount,
      totalPeople
    };

    let passwordMatch = this.passwordCheck()
    
    if (passwordMatch) {
      axios.post("/newGroup", newGroup)
        .then(function(res) {
          alert(res.data);
      });
    } else {
      alert("Password does not match");
    }
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
    this.setState({ [id]: value });
  }

  whichGroupToRender() {
    const { handleCreateGroup, handleNewGroupOption } = this;
    const { groupOptions } = this.state;

    if (groupOptions === "makeNewGroup") {
      return (
        <div>
          <label>Group Name:</label>
          <input onChange={handleNewGroupOption} id="groupName" type="text" />
          <div />
          <label>Group Password:</label>
          <input
            onChange={handleNewGroupOption}
            id="groupPass"
            type="password"
          />
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
          <input
            onChange={handleNewGroupOption}
            id="totalPeople"
            type="number"
          />
          <div />
          <button onClick={handleCreateGroup}>Crate New Group</button>
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
