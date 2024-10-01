"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export interface CartItem {
  productId: number; 
  title: string;
  quantity: number;
  price: number;
}

const CheckoutForm = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null); // State để lưu phương thức thanh toán

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/checkout'); // Gọi API
        if (!response.ok) {
          throw new Error('Không thể lấy dữ liệu');
        }
        const data = await response.json();
        setCartItems(data); // Lưu trữ dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm trong giỏ hàng:", error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateSubTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
 
   

  return (
    <>
      <div className="checkout-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="user-actions">
                <i className="fas fa-sign-in-alt"></i>
              </div>
            </div>
          </div>

          <form>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Thông Tin Thanh Toán</h3>

                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Quốc Gia <span className="required">*</span>
                        </label>

                        <div className="select-box">
                          <select className="form-select">
                            <option value="1">Việt Nam</option>
                            <option value="2">Lào</option>
                            <option value="0">Campuchia</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Tên <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Họ <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Địa chỉ <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Thị trấn / Thành phố <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Tỉnh / Huyện <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Mã bưu điện <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Địa chỉ email <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Số điện thoại <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="notes"
                          id="notes"
                          cols={30}
                          rows={5}
                          placeholder="Ghi chú đơn hàng"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <h3 className="title">Đơn hàng của bạn</h3>
                  <div className="order-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Tên sản phẩm</th>
                          <th scope="col">Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems && cartItems.length > 0 ? (
                          cartItems.map((cartItem, index) => (
                            <tr key={index}>
                              <td className="product-name">
                                <Link href={`/shop/single-products/${cartItem.productId}`}>
                                  {cartItem.title}
                                </Link>
                              </td>
                              <td className="product-total">
                                <span className="subtotal-amount">
                                  {cartItem.price * cartItem.quantity} VND
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={2} className="text-center">
                              Không có sản phẩm nào trong giỏ hàng.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="payment-box">
                    <div className="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="Ngân Hàng"
                          name="radio-group"
                          onChange={() => setPaymentMethod('Ngân Hàng')}
                        />
                        <label htmlFor="Ngân Hàng">Chuyển khoản qua Ngân hàng</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="radio-group"
                          onChange={() => setPaymentMethod('cod')}
                        />
                        <label htmlFor="cash-on-delivery">Thanh toán khi nhận hàng</label>
                      </p>
                    </div>

                   
                    {paymentMethod === 'Ngân Hàng' && (
                      <div className="bank-info">
                        <h4>Thông Tin Tài Khoản Ngân Hàng</h4>
                        <p>Ngân hàng: TECHCOMBANK </p>
                        <p>Số tài khoản: 12399999999</p>
                        <p>Tên tài khoản: BARITON</p>
                        <h4>Mã QR Thanh Toán</h4>
                        <img 
                        src="\images\checkout\QR.png" 
                        alt="QR Code" 
                        width="150" 
                        height="150" />
                      </div>
                    )}

                    <div className="cart-totals">
                      <ul>
                        <li>
                          Tổng <span>{cartItems ? calculateSubTotal(cartItems) : 0} VND</span>
                        </li>
                        <li>
                          Phí Ship <span>30.000 VND</span>
                        </li>
                        <li>
                          Thành Tiền <span><b>{cartItems ? (calculateSubTotal(cartItems) + 30000) : 0} VND</b></span>
                        </li>
                      </ul>
                    </div>

                    <Link href="#" className="btn btn-primary order-btn"
                      onClick={() => {
                        alert("Đặt hàng thành công, cảm ơn quý khách!");
                      }}>

                      Đặt hàng
                      
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
