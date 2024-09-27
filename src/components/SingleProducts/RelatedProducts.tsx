"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ISanPham } from '../Shop/Products'

const RelatedProducts: React.FC = () => {
  const products: ISanPham[] = [
    {
      id: 1,
      title: 'ÁO SƠ MI NGẮN TAY HỌA TIẾT',
      image: '/images/shop/nam1.1.jpg',
      image1: '/images/shop/nam1.1.jpg',
      content: '',
      price: 320000,
      oldprice: 400000,
    },
    {
      id: 2,
      title: 'ÁO SƠ MI NGẮN TAY TRẮNG',
      image: '/images/shop/nam2.jpg',
      image1: '/images/shop/nam2.1.jpg',
      content: '',
      price: 310000,
      oldprice: 380000,
    },
    {
      id: 3,
      title: 'ÁO SƠ MI NGẮN TAY XANH CARO',
      image: '/images/shop/nam3.jpg',
      image1: '/images/shop/nam3.1.jpg',
      content: '',
      price: 300000,
      oldprice: 360000,
    },
  ];

  return (
    <div className="related-products">
      <div className="container">
        <div className="section-title">
          <div className="content">
            {/* Add section title content here */}
          </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href={`/shop/single-products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src={product.image1}
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href={`/shop/single-products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div className="price">
                    <span className="new">{product.price.toLocaleString()} VNĐ</span>
                    <span className="old">{product.oldprice.toLocaleString()} VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;