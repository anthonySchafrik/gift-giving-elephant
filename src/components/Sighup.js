import React, { Component } from "react";

export default class Sighup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return <h3>Log in or sigh up</h3>;
  }
}
