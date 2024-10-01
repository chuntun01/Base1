"use client";

import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const ContactFormContent: React.FC = () => {
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Mọi thắc mắc</span>
            <h2>Xin hãy gửi thư cho chúng tôi</h2>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <Image
                    src="/images/contact.png"
                    alt="image"
                    width={395}
                    height={480}
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Liên hệ với chúng tôi qua Số điện thoại hoặc Địa chỉ Email</h3>
              <h2>
                <span className="number">0905298506</span>
                <span className="or">OR</span>
                <span className="email">Hotrungtuan18062004@gmail.com</span>
              </h2>

              <ul className="social">
                <li>
                  <a
                    href="https://www.youtube.com/@trungtuan1114"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100045883125164"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tr.t01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
