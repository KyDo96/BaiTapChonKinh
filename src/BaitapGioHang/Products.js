import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
                <div className="card">
          <img className="card-img-top" src={item.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button className="btn btn-success">Chi tiết</button>
            <button className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
        )
    }
}
