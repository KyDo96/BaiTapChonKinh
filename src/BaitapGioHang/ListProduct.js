import React from "react";
const renderDS = (arr) => {
  arr.map((item, index) => {
    return (
      <div key={index} className="col-sm-4">
        
      </div>
    );
  });
};
export default function ListProduct(props) {
  return (
    <div className="container">
      <div className="row">{renderDS(props.DSHA)}</div>
    </div>
  );
}
