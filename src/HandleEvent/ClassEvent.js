import React, { Component } from "react";

export default class ClassEvent extends Component {
  handleFocus = () => {
    console.log("hello");
  };
  handleFocusParam = (name) => {
    console.log("hello" + name);
  };
  render() {
    return (
      <div>
        <h2>Class Event</h2>
        <input
          type="text"
          placeholder="eventfocus"
          onFocus={this.handleFocus}
        ></input>
        <input
          type="text"
          placeholder="eventfocus"
          onFocus={() => this.handleFocusParam("ky")}
        ></input>
      </div>
    );
  }
}
