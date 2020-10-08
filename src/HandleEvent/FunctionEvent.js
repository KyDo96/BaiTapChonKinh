import React from "react";

export default function FunctionEvent() {
  const handleClick = () => {
    alert("click me");
  };
  const handleClickParam = (name) => {
    alert("click" + name);
  };

  return (
    <div>
      <h2>Handle Event</h2>
      {/* xu ly su kien trong JS thuan */}
      {/* <button onclick="handleClick()"">click me</button> */}
      {/* in ReactJS */}
      <button onClick={handleClick}>click me</button>
      <button
        onClick={() => {
          handleClickParam("ky");
        }}
      >
        click RJ param
      </button>
    </div>
  );
}
