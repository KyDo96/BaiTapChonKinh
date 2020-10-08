import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJs", "NodeJs", "ViewJs", "React Native"];
  renderDanhSachKhoaHoc = (arr) => {
    const arrDS = arr.map((item, index) => {
      console.log("ky");
      console.log(index);
      return <li key={index}>{item}</li>;
    });
    console.log(arrDS);
    return arrDS;
  };
  render() {
    console.log("run render");
    return (
      <div>
        <h2>List and Keys</h2>
        <h3>Danh sach Khoa hoc</h3>
        <ul>
          {/* <li>ReactJs</li>
          <li>NodeJs</li>
          <li>ViewJs</li> */}
          {this.renderDanhSachKhoaHoc(this.danhSachKhoaHoc)}
        </ul>
      </div>
    );
  }
}
