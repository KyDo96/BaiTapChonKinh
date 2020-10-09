import React from "react";

export default function ChiTietKinh(props) {
  console.log(props);
  console.log(props.SPChiTiet.link);
  return (
    <div
      className="card text-left"
      style={{ width: 300, position: "relative" }}
    >
      <img
        className="card-img-top"
        src="./img/glassesImage/model.jpg"
        alt="hinh model"
      />
      <img
        src={props.SPChiTiet.link}
        alt="kinh"
        style={{
          width: 170,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "16%",
        }}
      />
      <div className="card-body">
        <span className="card-title badge-danger h3 px-2 rounded">
          {props.SPChiTiet.price}
        </span>
        <p className="card-text mt-2">{props.SPChiTiet.name}</p>
      </div>
    </div>
  );
}
