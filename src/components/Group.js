import React, { Component } from "react";

import CreateGroup from "./CreateGroup";
import EditGroup from "./EditGroup";

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

  whichGroupToRender() {
    const { groupOptions } = this.state;

    if (groupOptions === "makeNewGroup") {
      return <CreateGroup />;
    }
    if (groupOptions === "editGroup") {
      return <EditGroup />;
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

export default Group;
