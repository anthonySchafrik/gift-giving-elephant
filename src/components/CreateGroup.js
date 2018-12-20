import React, { Component } from "react";

export default class CreateGroup extends Component {
  render() {
    const { handleNewGroupOption, handleCreateGroup } = this.props;
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
        <button onClick={handleCreateGroup}>Crate New Group</button>
      </div>
    );
  }
}
