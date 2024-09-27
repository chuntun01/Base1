"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductsContent, { ISanPham } from "@/components/Shop/SingleProductsContent";



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

  return <>
  {
  data && <SingleProductsContent sanPham={data} />
  }
  </>;
}
