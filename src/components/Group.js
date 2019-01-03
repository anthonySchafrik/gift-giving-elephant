import React, { Component } from "react";

import CreateGroup from "./CreateGroup";

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupOptions: ""
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
      return <CreateGroup />;
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

export default Group;
