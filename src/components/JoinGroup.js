import React, { Component } from "react";

class JoinGroup extends Component {
  render() {
    return (
      <div>
        <h3>
          Please enter the Name and password of the group you are trying to
          join.
        </h3>
        <label>Group Name: </label>
        <input type="text" />
        <label>Group password: </label>
        <input type="password" />
      </div>
    );
  }
}

export default JoinGroup;
