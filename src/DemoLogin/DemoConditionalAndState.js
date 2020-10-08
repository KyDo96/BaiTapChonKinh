import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  //   isLogin = false;
  state = {
    isLogin: false,
  };
  changeIsLogin = () => {
    // this.isLogin = true;
    // console.log(this.isLogin);
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return <p>Hello Ky</p>;
    } else {
      return <button onClick={this.changeIsLogin}>Login </button>;
    }
    // return this.isLogin ? <p>Hello Ky</p> : ;
  };
  render() {
    return this.renderLogin();
  }
}
