import React, { Component } from "react";

export default class ChonMauXe extends Component {
  state = {
    urlHinh: "./img/car/products/black-car.jpg",
  };
  changeColor(color) {
    this.setState({
      urlHinh: color,
    });
  }
  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button
                onMouseEnter={() => {
                  this.changeColor("./img/car/products/black-car.jpg");
                }}
                className="btn"
              >
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                onMouseEnter={() => {
                  this.changeColor("./img/car/products/red-car.jpg");
                }}
                className="btn"
              >
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                onMouseEnter={() => {
                  this.changeColor("./img/car/products/silver-car.jpg");
                }}
                className="btn"
              >
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                onMouseEnter={() => {
                  this.changeColor("./img/car/products/steel-car.jpg");
                }}
                className="btn"
              >
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.urlHinh}
                alt="hinh"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
