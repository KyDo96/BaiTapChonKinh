import React, { Component } from "react";

export default class ClassProps extends Component {
  //   constructor(props) {
  //     super();
  //   }
  render() {
    console.log("run ClassProps");
    console.log(this.props);
    return (
      <div>
        <h2>Class Props</h2>
        <p>type:{this.props.type} </p>
        <img src={this.props.image} alt="hinh dep" />
      </div>
    );
  }
}
