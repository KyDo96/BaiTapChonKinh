import React, { Component } from "react";
import ClassProps from "./ClassProps";
// import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  type = "Little Golden";
  image =
    "data:image/jpeg;base64,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";

  render() {
    console.log("run render");
    return (
      <div>
        <h2>Props</h2>
        {/* dung de truyen du lieu giua cac component  */}
        {/* <FunctionProps type={this.type} image={this.image} /> */}
        {/* <ClassProps type={this.type} image={this.image} /> */}
      </div>
    );
  }
}