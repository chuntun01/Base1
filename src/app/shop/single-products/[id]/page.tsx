"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductsContent, {
  ISanPham,
} from "@/components/Shop/SingleProductsContent";
import NavbarTwo from "../../../../..//src/components/Layouts/NavbarTwo";
import Footer from "../../../../..//src/components/Layouts/Footer";
import PageBanner from "../../../../..//src/components/Common/PageBanner";

export default function ChiTietSanPham({ params }: { params: { id: string } }) {
  console.log(params.id);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ISanPham | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ISanPham>(`/api/sanpham/${params.id}`);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <NavbarTwo />
      <PageBanner

        pageTitle='Sản Phẩm'
        homePageUrl='/'
        homePageText='Trang Chủ'
        activePageText='Sản Phẩm'

        bgImg='/images/page-title-bg1.jpg'
      />
      {data && <SingleProductsContent sanPham={data} />}
      <Footer />
    </>
  );
}
