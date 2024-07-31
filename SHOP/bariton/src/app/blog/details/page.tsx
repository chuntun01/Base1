import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/images/page-title-bg3.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
