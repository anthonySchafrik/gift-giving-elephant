import React, { Component } from "react";

export default class NewGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: ""
    };
    this.whichGroupToRender = this.whichGroupToRender.bind(this);
    this.setGroupState = this.setGroupState.bind(this);
  }

  setGroupState(event) {
    this.setState({ group: event.target.value });
  }

  whichGroupToRender() {
    const { group } = this.state;

    if (group === "makeNewGroup") {
      return <div>make new group switch statment works</div>;
    }
    if (group === "editGroup") {
      return <div>edit group switch statment works</div>;
    }
  }

  render() {
    const { whichGroupToRender, setGroupState } = this;
    return (
      <div>
        <h3>Click button for options you are looking for.</h3>
        <button onClick={setGroupState} value="makeNewGroup">
          Make New Group
        </button>
        <button onClick={setGroupState} value="editGroup">
          Edit Group
        </button>
        {whichGroupToRender()}
        <div />
      </div>
    );
  }
}
