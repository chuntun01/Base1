"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container-flauid p-0">
          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      trong cái cuộc sống này, sống mà không nói đạo lý là sống không biết đạo lý là gì.
                      Đã tồn tại thì đạo lý là cái đi trước, hèn mặc kệ, nhục mặc kệ, phải nói đạo lý cho ai nể thì nể không nể thì đừng đấm
                       tôi là được rồi.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <Image
                          src="/images/clients/client1.jpg"
                          alt="image"
                          width={960}
                          height={700}
                        />
                      </div>

                      <h3>Trung Tuấn</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div
                    className="client-image"
                    style={{
                      backgroundImage: `url(/images/clients/team3.jpg)`,
                    }}
                  >
                    <Image
                      src="/images/clients/team3.jpg"
                      alt="image"
                      width={960}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                     Biết điều là liều thuốc chữa thâm tốt nhất cho cơ thể, nó có khả năng làm mờ vết thâm trước cả khi vết thâm 
                     kịp xuất hiện, thay vì phát ngôn sử dụng đạo lý để giáo huấn người khác thì đơn giản hơn hãy biết điều.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <Image
                          src="/images/clients/client2.jpg"
                          alt="image"
                          width={960}
                          height={700}
                        />
                      </div>

                      <h3>Thanh Phong</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div
                    className="client-image"
                    style={{
                      backgroundImage: `url(/images/clients/team2.jpg)`,
                    }}
                  >
                    <Image
                      src="/images/clients/team2.jpg"
                      alt="image"
                      width={960}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
