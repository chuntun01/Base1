import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogWithRightSidebar from "../../../components/Blog/BlogWithRightSidebar";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog With Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog With Right Sidebar"
        bgImg="/images/page-title-bg3.jpg"
      />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
}