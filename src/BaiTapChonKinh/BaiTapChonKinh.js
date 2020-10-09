import React, { useState } from "react";
import ChiTietKinh from "./ChiTietKinh";
import DanhSachKinh from "./DanhSachKinh";

export default function BaiTapChonKinh() {
  const DanhSachKinhData = [
    {
      link: "./img/glassesImage/v1.png",
      price: "$ 30",
      name: "GUCCI G8850U",
    },
    {
      link: "./img/glassesImage/v2.png",
      price: "$ 50",
      name: "GUCCI G8759H",
    },
    {
      link: "./img/glassesImage/v3.png",
      price: "$ 30",
      name: "DIOR D6700HQ",
    },
    {
      link: "./img/glassesImage/v4.png",
      price: "$ 50",
      name: "DIOR D6005U",
    },
    {
      link: "./img/glassesImage/v5.png",
      price: "$ 30",
      name: "PRADA P8750",
    },
    {
      link: "./img/glassesImage/v6.png",
      price: "$ 30",
      name: "PRADA P9700",
    },
    {
      link: "./img/glassesImage/v7.png",
      price: "$ 50",
      name: "FENDI F8750",
    },
    {
      link: "./img/glassesImage/v8.png",
      price: "$ 30",
      name: "FENDI F8500",
    },
    {
      link: "./img/glassesImage/v9.png",
      price: "$ 30",
      name: "FENDI F4300",
    },
  ];
  const [SPChiTiet, setSPChiTiet] = useState(DanhSachKinhData[0]);
  console.log(SPChiTiet);
  console.log(SPChiTiet.link);
  const changeSPChiTiet = (sp) => {
    setSPChiTiet(sp);
  };
  return (
    <div>
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <section className="model d-flex justify-content-center col-5">
              <ChiTietKinh SPChiTiet={SPChiTiet} />
            </section>
            <section className="mt-4 col-7 ">
              <DanhSachKinh
                setSPChiTiet={changeSPChiTiet}
                danhSach={DanhSachKinhData}
              />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
