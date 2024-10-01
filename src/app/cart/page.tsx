import React from "react";
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import CartTable from "../../components/Shop/CartTable";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Giỏ Hàng"
        homePageUrl="/"
        homePageText="Trang Chủ"
        activePageText="Giỏ Hàng"
        bgImg="/images/page-title-bg1.jpg"
      />

      <CartTable />

      <Footer />
    </>
  );
}
