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
  const totalSlides = 3; // Set total number of slides

  const changeQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
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
                {["S", "M", "L"].map((size) => (
                  <label key={size} style={{ textAlign: "center" }}>
                    <input type="radio" name="size" value={size} />
                    <div>{size}</div>
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
                  <button className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              <Link
                href="#"
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

