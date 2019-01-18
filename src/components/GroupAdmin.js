import React, { Component } from 'react';

import EditGroup from './EditGroup';
import GroupDetails from './GroupDetails';

class GroupAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminOptions: ''
    };

    this.handleInfoState = this.handleInfoState.bind(this);
    this.whichInfoToRender = this.whichInfoToRender.bind(this);
  }

  handleInfoState(event) {
    this.setState({ adminOptions: event.target.value });
  }

  render() {
    const { whichInfoToRender, handleInfoState } = this;
    return (
      <div>
        <p>
          If you like to edit group info use the botton. If you like to see who
          all is signed up click Group details.
        </p>
        <div>
          <button onClick={handleInfoState} value="editGroup">
            Edit Group
          </button>
          <button onClick={handleInfoState} value="groupDetails">
            Group Details
          </button>
        </div>
        <br />
        <div>{whichInfoToRender()}</div>
      </div>
    );
  }

  whichInfoToRender() {
    const { adminOptions } = this.state;

    if (adminOptions === 'editGroup') {
      return <EditGroup />;
    }
    if (adminOptions === 'groupDetails') {
      return <GroupDetails />;
    }
  }
}

export default GroupAdmin;
