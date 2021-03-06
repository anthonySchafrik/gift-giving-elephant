import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInfo, NEW_GROUP_INFO } from '../actions';
import { createNewGroup } from '../proxies/createGroup';

class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNewGroup = this.handleCreateNewGroup.bind(this);
    this.handleNewGroupOption = this.handleNewGroupOption.bind(this);
  }

  handleCreateNewGroup() {
    const { newGroup } = this.props;

    if (this.passwordCheck()) {
      createNewGroup(newGroup).then(res => {
        alert(res.data);
      });
    } else {
      alert('Password did not match');
    }
  }

  handleNewGroupOption(event) {
    const { id: key, value } = event.target;
    this.props.handleInfo(key, value, NEW_GROUP_INFO);
  }

  passwordCheck() {
    const { groupPass, groupPassCheck } = this.props.newGroup;
    if (groupPass === groupPassCheck) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { handleNewGroupOption, handleCreateNewGroup } = this;
    return (
      <div className="form-container">
        <label>Group Name:</label>
        <input onChange={handleNewGroupOption} id="groupName" type="text" />
        <br />
        <label>Group Password:</label>
        <input onChange={handleNewGroupOption} id="groupPass" type="password" />
        <br />
        <label>Group Password Check:</label>
        <input
          onChange={handleNewGroupOption}
          id="groupPassCheck"
          type="password"
        />
        <br />
        <label>Total Cash Amount</label>
        <input
          onChange={handleNewGroupOption}
          id="totalCashAmount"
          type="number"
        />
        <br />
        <label>How many People?:</label>
        <input onChange={handleNewGroupOption} id="totalPeople" type="number" />
        <div />
        <button
          style={{ marginTop: '1em' }}
          className="displayButtons"
          onClick={handleCreateNewGroup}
        >
          Create New Group
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { newGroup: state.group };
};

export default connect(
  mapStateToProps,
  { handleInfo }
)(CreateGroup);
