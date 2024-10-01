import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Products from '../../components/Shop/Products';
import Footer from '../../components/Layouts/Footer';

const Shop = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Shop'
        homePageUrl='/'
        homePageText='Trang chủ'
        activePageText='Cửa hàng'
        bgImg='/images/page-title-bg1.jpg'
      />

      <Products />

      <Footer />
    </>
  );
};

export default Shop;
