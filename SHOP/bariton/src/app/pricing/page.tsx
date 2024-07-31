import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import PricingCard from "../../components/Pricing/PricingCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Our Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImg="/images/page-title-bg3.jpg"
      />

      <PricingCard />

      <Footer />
    </>
  );
}
