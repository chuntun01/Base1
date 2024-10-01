import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import CheckoutForm from '../../components/Shop/CheckoutForm';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Thanh toán'
        homePageUrl='/'
        homePageText='Trang chủ'
        activePageText='Thanh toán'
        bgImg='/images/page-title-bg2.jpg'
      />

      <CheckoutForm />

      <Footer />
    </>
  );
}
