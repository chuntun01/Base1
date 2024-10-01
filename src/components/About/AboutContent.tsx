"use client";

import React from "react";
import Image from "next/image";

const AboutContact: React.FC = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about/about1.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
                <Image
                  src="/images/about/about2.jpg"
                  alt="image"
                  width={360}
                  height={300}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Chúng tôi có gì? </h2>
                <p>
                "Đến với Bariton, 
                nơi thời trang gặp gỡ phong cách! 
                Chúng tôi mang đến những thiết kế hiện đại, thanh lịch, 
                phù hợp với mọi dịp và phong cách cá nhân của bạn. 
                Hãy khám phá ngay bộ sưu tập độc đáo và ưu đãi đặc biệt chỉ có tại Bariton. 
                Cùng chúng tôi tạo nên phong cách riêng cho bạn!"
                </p>
                <p>
                Dù bạn yêu thích sự tối giản, năng động hay sang trọng, 
                Bariton luôn có những item hoàn hảo để bạn thể hiện cá tính riêng. 
                Chất liệu cao cấp, đường may tinh tế cùng sự cập nhật liên tục theo xu hướng mới nhất, 
                chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm tuyệt vời. Đừng bỏ lỡ cơ hội trở 
                thành phiên bản thời trang ấn tượng nhất của chính mình cùng Bariton
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Khởi đầu từ chiếc container</h3>
                  <p>
                  "Khởi đầu từ một chiếc container nhỏ bé, Bariton đã biến ý tưởng sáng tạo thành hiện thực. 
                  Với niềm đam mê thời trang và khát vọng mang lại giá trị khác biệt, chúng tôi bắt đầu từ con 
                  số không, trong không gian khiêm tốn nhưng tràn đầy nhiệt huyết. Từ chiếc container đầu tiên, 
                  Bariton dần phát triển và mở rộng, trở thành thương hiệu thời trang đáng tin cậy, được 
                  yêu thích nhờ những thiết kế độc đáo, tinh tế và luôn bắt kịp xu hướng."
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Sứ mệnh </h3>
                  <p>
                  Mang đến những sản phẩm thời trang chất lượng cao, thiết kế tinh tế và hợp xu hướng.
Tạo ra giá trị bền vững cho khách hàng thông qua dịch vụ tận tâm và trải nghiệm mua sắm tuyệt vời.
Khuyến khích phong cách cá nhân và sự tự tin thông qua trang phục.
Đóng góp tích cực vào cộng đồng bằng việc phát triển thời trang thân thiện với môi trường.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Chúng tôi là ai</h3>
                  <p>
                  Hai nhà sáng lập của Bariton đến từ hoàn cảnh khác nhau: 
                  một người từng vô gia cư, người kia là công nhân cảng. Cùng chung khát 
                  vọng thay đổi cuộc sống, họ khởi đầu từ một chiếc container nhỏ, vượt qua mọi 
                  khó khăn để xây dựng nên Bariton, trở thành biểu tượng của ý chí vươn 
                  lên và sự sáng tạo trong thời trang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
          />
        </div>
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
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={182}
            height={146}
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
            src="/images/shape/dot2.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
