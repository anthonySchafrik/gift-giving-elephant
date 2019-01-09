import React, { Component } from "react";

import CreateGroup from "./CreateGroup";
import EditGroup from "./EditGroup";
import JoinGroup from "./JoinGroup";

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupOptions: ""
    };

    this.handleGroupState = this.handleGroupState.bind(this);
    this.whichGroupToRender = this.whichGroupToRender.bind(this);
  }

  handleGroupState(event) {
    this.setState({ groupOptions: event.target.value });
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
        <button onClick={handleGroupState} value="joinGroup">
          Join Group
        </button>
        {whichGroupToRender()}
        <div />
      </div>
    );
  }

  whichGroupToRender() {
    const { groupOptions } = this.state;

    if (groupOptions === "makeNewGroup") {
      return <CreateGroup />;
    }
    if (groupOptions === "editGroup") {
      return <EditGroup />;
    }
    if (groupOptions === "joinGroup") {
      return <JoinGroup />;
    }
  }
}

export default Group;
