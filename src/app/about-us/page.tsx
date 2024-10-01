import React from 'react';
import NavbarTwo from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import AboutContact from '../../components/About/AboutContent';
import FeedbackSlider from '../../components/Common/FeedbackSlider';
import FreeTrialForm from '../../components/Common/FreeTrialForm';
import Footer from '../../components/Layouts/Footer';

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle='về chúng tôi'
        homePageUrl='/'
        homePageText='trang chủ'
        activePageText='về chúng tôi'
        bgImg='/images/page-title-bg1.jpg'
      />

      <AboutContact />
    

      <FeedbackSlider />


      <FreeTrialForm />

      <Footer />
    </>
  );
}
