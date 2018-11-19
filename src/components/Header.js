import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>Account Setting</button>
        <button>Log Out</button>
      </div>
    );
  }
}
