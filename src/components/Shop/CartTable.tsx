"use client";

import Link from "next/link";
import Image from "next/image";
import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
  useCallback,
} from "react";
import axios from "axios";
import { deleteSanPhamToCart, editSanPhamToCart, addSanPhamToCart } from "@/events/cart.event";

export interface Root {
  cartItems: CartItem[];
}

export interface CartItem {
  id: number;
  productid: number;
  quantity: number;
  createdat: string;
  productsize: string;
  price: number;
  title: string;
  image: string;
}

const CartTable: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CartItem[] | null>(null);

  const loadData = useCallback(async () => {
    try {
      const response = await axios.get<Root>(`/api/cart`);
      setData(response.data.cartItems);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  // Fetch data từ API
  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }
  const calculateTotal = (price: number, quantity: number) => price * quantity;
  const calculateSubTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const handleChangeSoLuong = async (
    item: CartItem,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const soLuong = Number(e.target.value);
    if (isNaN(soLuong) || soLuong < 0) {
      // Nếu số lượng không hợp lệ
      alert("Số lượng không hợp lệ");
      return;
    }
    if (soLuong < 1) {
      // Nếu số lượng là 0, xóa sản phẩm
      await deleteSanPhamToCart(item.id);
    } else {
      //update dữ liệu lên API nếu số lượng hợp lệ
      await editSanPhamToCart(item.id, soLuong, item.productsize);
    }
  
    // load lại dữ liệu 
    await loadData();
  };

  //  xử lý xóa sản phẩm
  const handleDelete = async (id: number) => {
    await deleteSanPhamToCart(id);
    await loadData(); // Tải lại dữ liệu sau khi xóa
  };
if (data && data.length === 0) {
    return  (
    <div
      className="empty cart text-center"
      data-aos-duration="1000"
      data-aos-delay="600"
      data-aos-content="center"
  >
    <h2>Giỏ hàng trống</h2>
    <p>
    đến cửa hàng của chúng tôi 
    </p>
   

    <Link href="/shop" className="btn btn-primary">
      Mua sắm 
    </Link>
  </div>
  ); // Hiển thị thông báo nếu không có sản phẩm nào
 } else {

  return (
    <div className="cart-area ptb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sản phẩm </th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Đơn giá </th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tạm tính</th>
                      <th scope="col">xóa</th>
                    </tr>
                  </thead>
                  {data && (
                    <tbody>
                      {data?.map((CartItem, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <Link
                              href={`/shop/single-products/${CartItem.productid}`}
                            >
                              <Image
                                src={CartItem.image}
                                alt="item"
                                width={300}
                                height={350}
                              />
                            </Link>
                          </td>

                          <td className="product-name">
                            <Link
                              href={`/shop/single-products/${CartItem.productid}`}
                            >
                              {CartItem.title}
                            </Link>
                          </td>

                          <td className="product-price">
                            <span className="unit-amount">{CartItem.price}</span>
                          </td>

                          <td className="product-quantity">
                            <div className="input-counter">
                              <input
                                type="number"
                                disabled={loading}
                                defaultValue={CartItem.quantity.toString()}
                                onChange={(e) => handleChangeSoLuong(CartItem, e)}
                              />
                            </div>
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">
                              {calculateTotal(CartItem.price, CartItem.quantity)}
                            </span>{" "}
                            {/* Tính tổng giá */}
                          </td>
                          <td className="product-actions"> {/* Thêm ô cho Actions */}
                            <button 
                              type="button" 
                              className="remove"
                              onClick={() => handleDelete(CartItem.id)} // Gọi hàm xóa khi nhấn
                            >
                              <i className="far fa-trash-alt"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>

              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-7 col-md-7">
                    <div className="shopping-coupon-code">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập mã voucher"

                        name="coupon-code"
                        id="coupon-code"
                      />
                      <button 
                      type="button" 
                      onClick={() => alert("Mã giảm giá không hợp lệ hoặc không tồn tại!")} 
                      >Áp dụng Vocher</button>
                    </div>
                    
                  </div>

                  <div className="col-lg-5 col-sm-5 col-md-5 text-right"></div>
                </div>
              </div>

              <div className="cart-totals">
               
                <ul>
                  <li>
                  Tổng <span>{ data ? calculateSubTotal(data):0} VND</span> {/* Tổng tiền */}
                  </li>
                  <li>
                    Phí Ship <span>30.000 VND</span>
                  </li>
                  <li>
                    Thành Tiền {" "}
                    <span>
                      <b>{ data ? (calculateSubTotal(data)+30000):0} VND</b>
                    </span>
                  </li>
                </ul>
                <Link href="/checkout/" className="btn btn-primary">
                 Thanh Toán 
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default CartTable;
