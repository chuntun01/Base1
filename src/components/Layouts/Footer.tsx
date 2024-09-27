"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/white-logo.png"
                      alt="image"
                      width={149}
                      height={37}
                    />
                  </Link>
                  <p>
                    Nền tảng thương mại điện tử tập trung vào trải nghiệm người dùng và khả năng cập nhật,
                    tất cả mọi thứ bạn cần đều có sẵn tại đây, chúng tôi luôn sẵn sàng tiếp nhận và phát triển.
                    trải nghiệm của khách hàng là tất cả những gì chúng tôi hướng tới.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61558788946584" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tr.t01" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@trungtuan1114" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Dịch vụ</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/details"> mua sắm</Link>
                  </li>
                  <li>
                    <Link href="/services/details">liên hệ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>truy cập nhanh </h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about-us">về chúng tôi</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Liên hệ</Link>
                  </li>
                  <li>
                    <Link href="/services">Dịch vụ</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Về chúng tôi</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Địa chỉ:</span>
                   84/11 phường thạnh xuân <br /> quận 12, Hồ chí Minh
                  </li>
                  <li>
                    <span>Email:</span>
                    bariton@gmail.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +44 587 154756
                  </li>
                  <li>
                    <span>Fax:</span>
                    +44 785 4578964
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Bariton. All Rights Reserved{" "}
                  <a href="#" target="_blank">
                    TT & TP
                  </a>
                  .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
