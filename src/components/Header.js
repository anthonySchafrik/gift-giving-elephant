import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Account Setting</button>
        <button>Log Out</button>
      </div>
    );
  }
}
