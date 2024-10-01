"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export interface ISanPham {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number  ;
  oldprice:number;
  image1: string;

}

export interface IResData{
  sanPhams:  ISanPham[];
  soTrang: number;
}

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IResData| null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<IResData>(`/api/sanpham?page1`);
        setData(response.data);
        setLoading(false);

      } catch (e) {
        console.error(e);
      }
    };

    loadData();
  }, []);



  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="shop-area ptb-110">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Hiển thị 18 trong số 18 kết quả</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Sắp xếp mặc định</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {data?.sanPhams.map((sanPham, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-product-box">
                  <div className="product-image">
                    <Link href={`/shop/single-products/${sanPham.id}`}>
                      <Image
                        src={sanPham.image}
                        alt="image"
                        width={800}
                        height={850}
                      />
                      <Image
                        src={sanPham.image1}
                        alt="image"
                        width={800}
                        height={850}
                      />
                    </Link>
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="/shop/single-products">
                        {sanPham.title}
                      </Link>
                    </h3>
                    
                    <div className="price">
                      <span className="new">{sanPham.price} VND</span>
                      <span className="old">{sanPham.oldprice} VND</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                
                {
                  Array.from({ length: data?.soTrang ?? 1 }, (_, i) => (<a key={i+1} href={``} className="page-numbers">
                    {i+1}
                  </a>))
                }

                
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
