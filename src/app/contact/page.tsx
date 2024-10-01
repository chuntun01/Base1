import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ContactFormContent from '../../components/Contact/ContactFormContent';
import Footer from '../../components/Layouts/Footer';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='Liên hệ'
        homePageUrl='/'
        homePageText='Trang chủ'
        activePageText='Liên hệ'
        bgImg='/images/page-title-bg3.jpg'
      />

      <ContactFormContent />

      <Footer />
    </>
  );
}
