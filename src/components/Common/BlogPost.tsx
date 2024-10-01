"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost: React.FC = () => {
  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Tin tức mới từ chúng tôi </h2>
            <p>
              theo dõi blog của chúng tôi để cập nhật thật nhiều ưu đãi và các chương trình khuyến mãi cũng như tri ân khách hàng, 
              đặc biệt là các chương trình biểu diễn do chính nhãn hàng tổ chức.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog1.jpg"
                      alt="image"
                      width={510}
                      height={415}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="/blog">Admin</Link>
                      </li>
                      <li>March 5, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                    BST Loewe Xuân-Hè 2025: Một kỷ nguyên vang dội của Johnathan Anderson </Link>
                  </h3>

                  <p>
                  Ngày 27/9 vừa qua (theo giờ Việt Nam), Loewe đã cho ra mắt BST Xuân-Hè 2025 với sự tham gia của...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="image"
                      width={510}
                      height={415}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="/blog">Admin</Link>
                      </li>
                      <li>March 13, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                    Châu Bùi, Baifern cùng dàn sao quốc tế khuấy động show Loewe Xuân-Hè 2025
                    </Link>
                  </h3>
                  <p>
                  Gal Gadot, Châu Bùi, Dương Mịch, Baifern... khoe cá tính tại show diễn ra mắt BST Loewe Xuân-Hè...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="image"
                      width={510}
                      height={415}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="/blog">Admin</Link>
                      </li>
                      <li>March 17, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                    Gucci ra mắt chiến dịch quảng bá mới với sự tham gia của Debbie Harry và Kelsey Lu
                    </Link>
                  </h3>
                  <p>
                  Gucci ra mắt "We Will Always Have London" - một chiến dịch quảng bá mới của Giám đốc sáng tạo...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot4.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot5.png"
            alt="image"
            width={9}
            height={9}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot6.png"
            alt="image"
            width={11}
            height={11}
          />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
