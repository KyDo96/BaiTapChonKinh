/**
 * 1.dan layout
 * 2. xac dinh data thay doi va luu va state
 * 3.lay data trong state binding ra JSX
 * 4.list and key  render mang du lieu
 * 5.xay dung chuc nang xem chi tiet
 * 6. them gio hang
 * 7.xoa sp khoi gio hang
 * 8. tang giam so luong
 * 9. xay dung chuc nang hien thi tong so sp
 */

import React, { Component } from "react";
import ListProduct from "./ListProduct";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      maSP: "1",
      tenSP: "IPhone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP & Phụ 8 MP, 5 MP`,
      RAM: `4 GB`,
      ROM: `6 GB`,
    },
    {
      maSP: "2",
      tenSP: "VSPhong",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `OLED, `,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP & Phụ 8 MP, 5 MP`,
      RAM: `4 GB`,
      ROM: `6 GB`,
    },
    {
      maSP: "3",
      tenSP: "MeiZuPhone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `OLED, 6.5", `,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP & Phụ 8 MP, 5 MP`,
      RAM: `4 GB`,
      ROM: `6 GB`,
    },
  ];
  state = {
    sanPhamChiTiet: {
      maSP: "1",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: `Android 9.0 (Pie)`,
      cameraTruoc: `20 MP`,
      cameraSau: `Chính 48 MP & Phụ 8 MP, 5 MP`,
      RAM: `4 GB`,
      ROM: `6 GB`,
    },
  };
  renderChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (16)
              </button>
            </div>
            <ListProduct DSHA={this.danhSachSanPham} />
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Iphone XS Max</td>
                          <td>
                            <img src="./img/applephone.jpg" width={50} alt />
                          </td>
                          <td>
                            <button>-</button>7<button>+</button>
                          </td>
                          <td>27000000</td>
                          <td>189000000</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Meizu 16Xs</td>
                          <td>
                            <img src="./img/meizuphone.jpg" width={50} alt />
                          </td>
                          <td>
                            <button>-</button>7<button>+</button>
                          </td>
                          <td>7600000</td>
                          <td>53200000</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>VinSmart Live</td>
                          <td>
                            <img src="./img/vsphone.jpg" width={50} alt />
                          </td>
                          <td>
                            <button>-</button>2<button>+</button>
                          </td>
                          <td>5700000</td>
                          <td>11400000</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.RAM}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.ROM}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
