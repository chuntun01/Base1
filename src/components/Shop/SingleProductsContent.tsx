"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import RelatedProducts from "../SingleProducts/RelatedProducts";
import ProductsDetailsTab from "../SingleProducts/ProductsDetailsTab";
import axios from "axios";

export interface ISanPham {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
  oldprice: number;
  image1: string;
  image2: string;
}

export interface IResData {
  sanPhams: ISanPham[];
}


  export default function ({ sanPham }: { sanPham: ISanPham;}) {
  const [quantity, setQuantity] = useState(1);
  const swiperRef = useRef<any>(null); // Create a ref for Swiper instance
  const [size, setSize] = useState<string | null>(null); // Thêm state cho kích cỡ
  const totalSlides = 3; // Set total number of slides

  const changeQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  const handleAddToCart = async () => {
    if (!size) {
      alert("Vui lòng chọn kích cỡ!");
      return;
    }

    try {
      const response = await axios.post("/api/cart", { productId: sanPham.id, quantity, productSize: size }
      );

      if (response.status === 201) {
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng.");
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value); // Cập nhật kích cỡ được chọn
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const { activeIndex, slides } = swiperRef.current.swiper;
      if (activeIndex === slides.length - 1) {
        swiperRef.current.swiper.autoplay.stop(); // Stop autoplay when reaching the last slide
      }
    }
  };

  return (
    <section className="product-details-area ptb-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Swiper slider */}
            <Swiper
              ref={swiperRef}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
              onSlideChange={handleSlideChange}
              className="product-image-slider"
            >
              <SwiperSlide>
                <Image
                  src={sanPham.image}
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={sanPham.image1}
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={sanPham.image2}
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-lg-6">
            <div className="product-details-desc">
              <h3>{sanPham.title}</h3>

              <div className="price">
                <span className="new-price">{sanPham.price}VND</span>
                <span className="old-price">{sanPham.oldprice}VND</span>
              </div>
              <p>Chọn size</p>

              {/* Radio Button Group */}
              <div style={{ display: "flex", gap: "30px" }}>
                {["S", "M", "L"].map((sizeOption)=> (
                  <label key={sizeOption} style={{ textAlign: "center" }}>
                   <input
                      type="radio"
                      name="size"
                      value={sizeOption}
                      onChange={handleSizeChange} // Gọi hàm khi kích cỡ thay đổi
                    />
                    <div>{sizeOption}</div>
                  </label>
                ))}
              </div>

              <div
                className="product-add-to-cart"
                style={{ marginTop: "20px" }}
              >
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <button
                    onClick={() => changeQuantity(-1)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "18px",
                      border: "1px solid #ddd",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    style={{
                      width: "50px",
                      textAlign: "center",
                      padding: "5px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <button
                    onClick={() => changeQuantity(1)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "18px",
                      border: "1px solid #ddd",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    +
                  </button>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <button 
                  className="btn btn-primary"
                  onClick={handleAddToCart} // Gọi hàm khi nhấn nút
                  >
                    <i className="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              <Link
                href="/checkout/"
                className="btn btn-light"
                style={{ marginTop: "20px" }}
              >
                Mua ngay
              </Link>
            </div>
          </div>

          <div className="col-lg-12">
            <ProductsDetailsTab />
          </div>
        </div>
      </div>

      <RelatedProducts />
    </section>
  );
}

