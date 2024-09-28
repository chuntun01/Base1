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
import { editSanPhamToCart } from "@/events/cart.event";

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
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }
  const calculateTotal = (price: number, quantity: number) => price * quantity;

  const handleChangeSoLuong = async (
    item: CartItem,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const soLuong = Number(e.target.value);

    //gọi hàm update dữ liệu  lên API
    await editSanPhamToCart(item.id, soLuong);

    // load lại dữ liệu sau khi update
    const data = await loadData();
  };

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
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
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
                            <button type="button" className="remove">
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
                        placeholder="Coupon code"
                        name="coupon-code"
                        id="coupon-code"
                      />
                      <button type="submit">Apply Coupon</button>
                    </div>
                  </div>

                  <div className="col-lg-5 col-sm-5 col-md-5 text-right"></div>
                </div>
              </div>

              <div className="cart-totals">
                <h3>Cart Totals</h3>
                <ul>
                  <li>
                    Subtotal <span>$150.00</span> {/* Tổng tiền */}
                  </li>
                  <li>
                    Shipping <span>$30.00</span>
                  </li>
                  <li>
                    Total{" "}
                    <span>
                      <b>$180.00</b>
                    </span>
                  </li>
                </ul>
                <Link href="/checkout/" className="btn btn-primary">
                  Proceed to Checkout
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
