import React, { useEffect, useState } from 'react';
import NavbarTwo from '../../../components/Layouts/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import SingleProductsContent from '../../../components/Shop/SingleProductsContent';
import Footer from '../../../components/Layouts/Footer';
import { ISanPham } from '../../../components/Shop/SingleProductsContent';
import axios from 'axios';

const SingleProducts = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<ISanPham | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get<ISanPham>(`/api/sanpham/${params.id}`);
        setData(response.data);
      } catch (e) {
        console.error('Error fetching product:', e);
      }
    };

    loadData();
  }, [params.id]);

  return (
    <>
    
      <NavbarTwo />

      <PageBanner

        pageTitle='Single Products'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Single Products'
        bgImg='/images/page-title-bg1.jpg'
      />

      {data && (
        <SingleProductsContent sanPham={data} />
      )}
      
      <Footer />
    </>
  );
};

export default SingleProducts;
