import React from "react";

export default function FunctionProps(p) {
  console.log(p);
  console.log(p.abc);
  return (
    <div>
      <h3>Function Props</h3>
      <p>type:{p.type} </p>
      <img src={p.image} alt="hinh dep" />
    </div>
  );
}
