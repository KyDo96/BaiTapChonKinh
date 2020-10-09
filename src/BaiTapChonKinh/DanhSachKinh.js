import React from "react";
import "./DanhSachKinh.css";
export default function DanhSachKinh(props) {
  const renderDanhSachKinh = () => {
    return props.danhSach.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              props.setSPChiTiet(item);
            }}
          >
            <img
              src={item.link}
              alt="hinh"
              style={{ width: 100, borderRadius: 20 }}
            />
          </button>
        </div>
      );
    });
  };
  return (
    <div className="glasses__list d-flex justify-content-around flex-wrap">
      {renderDanhSachKinh()}
    </div>
  );
}
