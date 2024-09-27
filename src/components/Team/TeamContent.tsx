"use client";

import React from "react";
import Image from "next/image";

const TeamContent: React.FC = () => {
  return (
    <>
      <section className="team-area ptb-110">
        <div className="container">
          <div className="row">

              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team2.jpg"
                    alt="Team Image"
                    width={510}
                    height={510}
                  />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/profile.php?id=100045883125164"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/pon.thh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>Thanh Phong</h3>
                  <span>React Developer</span>
                </div>
              </div>

              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team3.jpg"
                    alt="Team Image"
                    width={510}
                    height={510}
                  />

                  <div className="social">
                    <a
                      href="https://www.facebook.com/profile.php?id=100057474295991"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/tr.t01/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="content">
                  <h3>trung Tuấn</h3>
                  <span>Web Developer</span>
                </div>
              </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TeamContent;
