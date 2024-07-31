"use client";

import React from "react";
import Image from "next/image";

const FreeTrialForm: React.FC = () => {
  return (
    <>
      <section className="free-trial-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div
              className="free-trial-image"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              style={{
                backgroundImage: `url(/images/woman2.jpg)`,
              }}
            >
              <Image
                src="/images/woman2.jpg"
                alt="image"
                width={969}
                height={653}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div
              className="free-trial-content"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h2>Start your free trial</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your business email here"
                />
                <button type="submit">Sign Up Free</button>
              </form>

              <p>
                Test out the Machine Learning features for 14 days, no credit
                card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrialForm;
