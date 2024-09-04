"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogThreeGrid: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 10, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 11, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 12, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog4.jpg"
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 13, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Add And Show Image With Size From Elementor Widget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog5.jpg"
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 14, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      How To The Active Menu Based On URL In Next.JS?
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog6.jpg"
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
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 14, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Instagram Feed Add To Your WordPress Site
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
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
      </div>
    </>
  );
};
export default BlogThreeGrid;
