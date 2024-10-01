import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import FeedbackSlider from "../../../components/Services/ServiceDetailsContent";


const Services = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="dịch vụ"
        homePageUrl="/"
        homePageText="Trang chủ"
        activePageText="dịch vụ"
        bgImg="/images/page-title-bg2.jpg"
      />

      <ServiceDetailsContent />

      <FeedbackSlider />

      <Footer />
    </>
  );
};

export default Services;
